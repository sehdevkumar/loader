import { SingletonService } from './singleton.service';
import { HttpClientService } from './http-client.service';
import { Component } from '@angular/core';
import { concat, Observable, of } from 'rxjs';
import { delay, mergeAll } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts = [];

  get getLoadingCount$() {
    return this.ss.loadingCount;
  }

  constructor(private http: HttpClientService, private ss: SingletonService) {}

  onDelay() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  onFetchData() {
    // tslint:disable-next-line:whitespace
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res) => {
        this.posts = res as any;
      });
  }
}
