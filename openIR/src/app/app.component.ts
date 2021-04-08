import { NONE_TYPE } from '@angular/compiler';
import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { DataService } from './data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  d3;
  Datamap;
  title = 'openIR';
  tweets = null;
  newsArticles = [];
  loader_show = false;
  start = 0;
  sort = "score";
  curr_tweet = null;
  query = ""
  showMap = false;
  rows = 20;
  country_data = null;
  chart = {};
  covid_data = null;
  showChart = false;
  covid_country = "Italy"
  poi_name = "Giuseppe Conte"
  covid_country_cap = "italy"

  constructor(private dataservice: DataService, private changeDetection: ChangeDetectorRef) {
    this.dataservice.getNews("covid").subscribe((news) => {
      this.newsArticles = news["articles"];
    });
    this.dataservice.getCountryCount("*").subscribe((data) => {
      this.country_data = data["data"];
      console.log(this.country_data);
    });
  }

  ngOnInit(){
    this.dataservice.getCovidData("GiuseppeConteIT").subscribe((data) => {
      this.covid_data = data["data"];
      this.chart = {
        "datasets": [
          { "data": this.covid_data["covid"], "label": "Covid" },
          { "data": this.covid_data["non_covid"], "label": "Non Covid", "hidden": true},
          { "data": this.covid_data["normalized"], "label": "Normalized" },
          { "data": this.covid_data["normalized"], "label": "Line", "type": "line" }
        ],
        "labels": ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],
        "options": {
          "legend": {
            "text": "Monthly tweet chart",
            "display": true,
          },
          "scales": {
            "yAxes": [{
              "ticks": {
                "beginAtZero": true
              }
            }],
          }
        }
      }
      console.log(this.chart);
    });
  }

  countryoptions = [
    {name:'India', value:'India', checked:false},
    {name:'Italy', value:'Italy', checked:false},
    {name:'USA', value:'USA', checked:false},
    {name:'Germany', value:'germany', checked:false},
    {name:'Brazil', value:'brazil', checked:false},
    {name:'France', value:'france', checked:false},
    {name:'Russia', value:'russia', checked:false},
    {name:'spain', value:'spain', checked:false}
  ]

  langoptions = [
    {name:'English', value:'en', checked:false},
    {name:'Italian', value:'it', checked:false},
    {name:'Hindi', value:'hi', checked:false}
  ]

  sentimentoptions = [
    {name:'Positive', value:'positive', checked:false},
    {name:'Neutral', value:'neutral', checked:false},
    {name:'Negative', value:'negative', checked:false}
  ]

  negate(ev){
    console.log(ev);
    return !ev;
  }

  search_lang = ["*"]
  search_country = ["*"]
  search_sentiment = ["*"]
  
  applyFilters(){
    this.search_lang = []
    this.search_country = []
    this.search_sentiment = []
    
    for(var i=0; i < this.langoptions.length; i++){
      for (var key in this.langoptions[i]) {
        if(this.langoptions[i][key] == true){
          this.search_lang.push(this.langoptions[i]["value"])
        }
      }
    }

    for(var i=0; i < this.sentimentoptions.length; i++){
      for (var key in this.sentimentoptions[i]) {
        if(this.sentimentoptions[i][key] == true){
          this.search_sentiment.push(this.sentimentoptions[i]["value"])
        }
      }
    }

    for(var i=0; i < this.countryoptions.length; i++){
      for (var key in this.countryoptions[i]) {
        if(this.countryoptions[i][key] == true){
          this.search_country.push(this.countryoptions[i]["value"])
        }
      }
    }
    this.rows = 20;
    this.start = 0;
    this.getTweets(this.query, this.start, this.rows, true)
  }

  sortResults(sorting){
    this.rows = 20;
    this.start = 0;
    this.sort = sorting;
    this.getTweets(this.query, this.start, this.rows, true)
  }

  closeBox() {
    this.showMap = false;
    this.showChart = false;
  }

  getTweets(search: string, start, rows, is_new = false) {
    this.loader_show = true;
    this.query = search;
    this.dataservice.getTweets(search, start, rows,this.search_country, this.search_lang,this.search_sentiment, this.sort).subscribe((tweets) => {
      console.log("tweets", tweets["response"]["docs"]);
      if (this.tweets != null && is_new == false) {
        console.log(this.tweets)
        console.log(tweets["response"]["docs"])
        this.tweets = this.tweets.concat(tweets["response"]["docs"])
      }
      else {
        this.tweets = tweets["response"]["docs"]
        this.dataservice.getNews(search).subscribe((news) => {
          this.newsArticles = news["articles"];
        });
      }
      console.log("Changing", this.tweets);
      this.start = this.tweets.length + 1;
      this.rows = 1;
      if (this.start + this.rows >= tweets["response"]["numFound"]) {
        this.rows = 0;
      }
    });
    this.loader_show = false;
    this.dataservice.getCountryCount(search).subscribe((data) => {
      this.country_data = data["data"];
      console.log(this.country_data);
    });
    this.changeDetection.detectChanges();
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    // visible height + pixel scrolled >= total height 
    this.getTweets(this.query, this.start, this.rows, false)
  }

  openTweet(tweet) {
    this.curr_tweet = tweet;
    console.log(this.curr_tweet);
    this.changeDetection.detectChanges();
  }

  createMap() {
    (<HTMLElement>document.getElementById("show_map")).style.display = "block";
  }

}
