import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

import { APP_CONFIG } from '../app.config';

@Injectable()
export class CommonRequestResponseService {
  options = { headers:  new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })};

  constructor(private http: HttpClient) {}

  get(url) {
    return this.http.get(APP_CONFIG.apiEndpoint + url)
      .map(this.mapData)
      .catch(this.catchError.bind(this));
  }


  postForThirdParty(url, inputData) {
    return this.http.post(url, inputData)
      .map(this.mapData)
      .catch(this.catchError.bind(this));
  }

  post(url, inputData) {
    return this.http.post(APP_CONFIG.apiEndpoint + url, inputData)
      .map(this.mapData)
      .catch(this.catchError.bind(this));
  }

  postWithoutHeader(url, inputData) {
    return this.http.post(APP_CONFIG.apiEndpoint + url, inputData)
      .map(this.mapData)
      .catch(this.catchError.bind(this));
  }

  postWithHeaderWithoutData(url) {
    return this.http.post(APP_CONFIG.apiEndpoint + url, this.options)
      .map(this.mapData)
      .catch(this.catchError.bind(this));
  }

  postWithHeader(url, inputData, defaultParam = []) {
    return this.http.post(APP_CONFIG.apiEndpoint + url, inputData, this.options)
      .map(this.mapData)
      .catch(this.catchError.bind(this));
  }

  postWithStaticHeaderData(url, inputData) {
    return this.http.post(APP_CONFIG.apiEndpoint + url, inputData, this.options)
      .map(this.mapData)
      .catch(this.catchError.bind(this));
  }

  putWithHeader(url, inputData, defaultParam = []) {
    return this.http.put(APP_CONFIG.apiEndpoint + url, inputData, this.options)
      .map(this.mapData)
      .catch(this.catchError.bind(this));
  }

  mapData(response: Response) {
    const data = response.json();
    if (data) {
      return data;
    }
  }

  catchError(error: Response) {
    return Observable.throw(error.json());
  }
}