import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  @Input() tweet;

  constructor() { 
  }

  ngOnInit(): void {
    var parts = this.tweet["created_at"][0].split(" ")
    this.tweet["created_at"][0] = parts[0] + ", " + parts[1] + " " + parts[2]; 
    if("retweeted_status.id" in this.tweet){
      this.tweet["full_text"] = this.tweet["retweeted_status.full_text"]
    }
    console.log(this.tweet["user"])
  }

}
