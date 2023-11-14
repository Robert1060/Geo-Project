import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService {
  public httpClient = inject(HttpClient)
  public readonly rootUrl = 'https://restcountries.com/v3.1/'

}
