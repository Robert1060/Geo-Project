import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

interface ServiceData {
  http: HttpClient;
  rootUrl: string
}

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService implements ServiceData {
  public readonly http = inject(HttpClient)
  public readonly rootUrl = 'https://restcountries.com/v3.1/'

}
