import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tweet-expanded',
  templateUrl: './tweet-expanded.component.html',
  styleUrls: ['./tweet-expanded.component.css']
})
export class TweetExpandedComponent implements OnInit {

  @Input() tweet;
  topics = null;
  ngOnChanges(changes) {
    this.dataService.getTopics(this.tweet["full_text"][0]).subscribe((data)=>{
      this.topics = new Set(data["topics"]);
      console.log(this.topics)
    })
    console.log("Tweet to be opened", this.tweet, changes);   
  }
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    console.log("Tweet to be opened", this.tweet);
  }

}
