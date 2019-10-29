import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResponse } from '../interfaces/movie';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  private host: string='http://www.omdbapi.com';
  private apiKey: string='3af8194f';
  private _lastSearch: string;

  searchResponse$: BehaviorSubject<SearchResponse | undefined> = new BehaviorSubject<SearchResponse>(undefined);  
  currentPage$: BehaviorSubject<number> = new BehaviorSubject<number>(1);  

  constructor(private httpClient: HttpClient) { }

  search(term: string, page: number=1): void{
    this._lastSearch=term;

    this.httpClient
    .get<SearchResponse>(`${this.host}?apikey=${this.apiKey}&page=${page}&s=${encodeURIComponent(term)}`)
    .pipe(
      tap((value: SearchResponse) => {
        this.searchResponse$.next(value);
        this.currentPage$.next(page);
      }),
      //tap((value: SearchResponse) => console.log(value)),
    )
    .subscribe();
  }

  pager(page: number){
    this.search(this._lastSearch, page);
  }
}
