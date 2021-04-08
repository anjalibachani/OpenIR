import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); // log to console instead
  
      return of(result as T);
    };
  }

  getNews(search: string): Observable<any> { 
    var key ="b3c99b1aa8694a14abee65cfb7b0bc52" // "0b73d59bb8114d7991582ea5a3a81c13" // ce00d8c7a7ff4fc587fe9de9ebcbde08
    return this.http.get("http://127.0.0.1:5000/get_News/"+search).pipe(
      catchError(this.handleError<any>('getProjects', []))
    );
  }

  getTweets(search: string, start, rows,country,lang,sentiment,score="score"): Observable<any> {
    var fq = ""
    console.log(country.length,lang,sentiment);
    for(var i = 0; i < country.length;i++){
      fq = fq + "fq=country%3A" + country[i]+"&";
    }
    for(var i = 0; i < lang.length;i++){
      fq = fq + "fq=lang%3A" + lang[i]+"&";    
    }
    
      for(var i = 0; i < sentiment.length;i++){
      fq = fq + "fq=sentiment%3A" + sentiment[i]+"&";    
    }

    var terms = search.split(" ")
    search = ""
    for (var i = 0; i < terms.length; i++){
      search = search + "full_text%3A" + terms[i] + "%20"
    }
    console.log(fq)
    return this.http.get("http://3.131.141.10:8983/solr/tweets/select?q="+search+"&" + fq +"rows="+rows.toString()+"&start="+start + "&sort=" +score+"%20desc").pipe(
      catchError(this.handleError<any>('getProjects', []))
    );
  }

  // filterSearch(country, lang, sentiment, start, rows): Observable<any> {

  //   search =  encodeURI(search)
  //   return this.http.get("http://3.131.141.10:8983/solr/tweets/select?fq=country%3A" + country + "&q=full_text%3A"+search+"&rows="+rows.toString()+"&start="+start).pipe(
  //     catchError(this.handleError<any>('getProjects', []))
  //   );
  // }

  getCountryCount(search: string): Observable<any> {
    console.log(search);
    var terms = search.split(" ")
    search = ""
    for (var i = 0; i < terms.length; i++){
      search = search + "full_text%3A" + terms[i] + "%20"
    }
    return this.http.get("http://127.0.0.1:5000/country_data/"+search).pipe(
      catchError(this.handleError<any>('countryData', []))
    );
  }

  getTopics(search: string): Observable<any> {
    return this.http.get("http://127.0.0.1:5000/get_topics/"+search).pipe(
      catchError(this.handleError<any>('countryData', []))
    );
  }

  getCovidData(poi_name: string): Observable<any> {
    return this.http.get("http://127.0.0.1:5000/covid_data/"+poi_name).pipe(
      catchError(this.handleError<any>('covid_data', []))
    );
  }

}
