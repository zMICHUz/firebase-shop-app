import { Component, OnInit } from '@angular/core'

import { NewsService } from '../shared'
import { News } from '../shared/news.model'

@Component({
  selector: 'home-news',
  templateUrl: 'news.component.html'
})
export class NewsComponent implements OnInit {
  news: Array<News> = []

  constructor (private newsService: NewsService) {}

  ngOnInit () {
    this.newsService.getNews().subscribe((news) => (this.news = news))
  }
}
