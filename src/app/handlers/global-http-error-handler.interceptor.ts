import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, retry, throwError, timer } from 'rxjs';

@Injectable()
export class GlobalHttpErrorHandlerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      retry({
        count: 3,
        delay: (error, retryCount) => timer(1000 * retryCount)
      }),
      catchError((err) => throwError(() => new Error(`Couldn't load data. Please try again later`)))
    );
  }
}
