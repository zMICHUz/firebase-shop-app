import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import * as _ from 'lodash'

import { News } from './news.model'

@Injectable()
export class NewsService {
  constructor (private http: HttpClient) {}

  getNews (): Observable<Array<News>> {
    return this.http
      .get('http://localhost:3000/news')
      .pipe(map((response) => _.map(response, (news) => new News(news['title']))))
  }
}
