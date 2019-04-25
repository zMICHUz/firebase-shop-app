import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'

import { delay, tap, catchError } from 'rxjs/operators'

import { LoggerService } from './logger.service'

@Injectable()
export class RestService {
  constructor (private http: HttpClient, private loggerService: LoggerService) {}

  pendingCalls = 0

  get (url: string): Observable<any> {
    this.pendingCalls++

    return this.http.get(url).pipe(
      delay(2000),
      tap(() => this.pendingCalls--),
      catchError((e) => {
        this.pendingCalls--

        this.loggerService.log('ERROR OCURRED!')

        return throwError(e)
      })
    )
  }
}
