import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'X-RapidAPI-Key': '4499afe693msha0d0f76660fd921p10457ejsn44b10b73d807',
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
  });

  getMovieApi(movieName: string): Observable<any>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("s",movieName);

    return this.http.get('https://movie-database-alternative.p.rapidapi.com/', {
      headers: this.headers,
      params: queryParams
    }).pipe(map((data: any) => {
      return data;
    }
    )
    )
}
}
