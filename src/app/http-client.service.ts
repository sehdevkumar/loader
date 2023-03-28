import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { SingletonService } from './singleton.service';
@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private http: HttpClient, private ss: SingletonService) {}

  public get<T>(url: string, options?: any): Observable<T> {
    this.ss.incrementLoadingCount();
    return this.http.get<T>(url, options).pipe(
      catchError(this.handleError),
      finalize(() => {
        this.ss.decrementLoadingCount();
      }),
    ) as Observable<any>;
  }

  public post<T>(url: string, body: any | null, options?: any): Observable<T> {
    this.ss.incrementLoadingCount();
    return this.http.post<T>(url, body, options).pipe(
      catchError(this.handleError),
      finalize(() => {
        this.ss.decrementLoadingCount();
      }),
    ) as Observable<any>;
  }

  public put<T>(url: string, body: any | null, options?: any): Observable<T> {
    this.ss.incrementLoadingCount();
    return this.http.put<T>(url, body, options).pipe(
      catchError(this.handleError),
      finalize(() => {
        this.ss.decrementLoadingCount();
      }),
    ) as Observable<any>;
  }

  public delete<T>(url: string, options?: any): Observable<T> {
    this.ss.incrementLoadingCount();
    return this.http.delete<T>(url, options).pipe(
      catchError(this.handleError),
      finalize(() => {
        this.ss.decrementLoadingCount();
      }),
    ) as Observable<any>;
  }

  private handleError(error: HttpErrorResponse) {
    // TODO: Implement error handling
    return throwError(error);
  }
}
