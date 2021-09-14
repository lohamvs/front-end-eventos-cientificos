import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonRestService {

  constructor(private http: HttpClient) { }

  get<T>(url: string, headers?: HttpHeaders): Observable<T> {
    let httpHeaders = this.commonHeaders();
    return this.http.get<T>(url, {headers: httpHeaders})
      .pipe(
        map(response => response),
        catchError(response => throwError(response))
      );
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body, {headers: this.commonHeaders()})
      .pipe(
        map(response => response),
        catchError(response => throwError(response))
      );
  }

  put<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(url, body, {headers: this.commonHeaders()})
      .pipe(
        map(response => response),
        catchError(response => throwError(response))
      );
  }
  
  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url)
      .pipe(
        map(response => response),
        catchError(response => throwError(response))
      );
  }

  private commonHeaders() {
    return new HttpHeaders()
      .set('Accept', 'application/json');
  }
}