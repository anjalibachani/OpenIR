import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css']
})
export class NewsArticleComponent implements OnInit {
  @Input() newsArticle;
  constructor() { }
  ngOnInit(): void {
  }

}
