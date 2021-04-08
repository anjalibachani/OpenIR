import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import { TweetExpandedComponent } from './tweet-expanded/tweet-expanded.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NewsArticleComponent } from './news-article/news-article.component';
import { MapComponent } from './map/map.component';
import { ChartsModule } from 'ng2-charts';
import { CovidCurveComponent } from './covid-curve/covid-curve.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    TweetExpandedComponent,
    NewsArticleComponent,
    MapComponent,
    CovidCurveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
