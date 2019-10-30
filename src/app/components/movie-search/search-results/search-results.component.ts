import { Component, OnInit } from '@angular/core';
import { OmdbService } from 'src/app/services/omdb.service';
import { observable, Observable } from 'rxjs';
import { SearchResponse } from 'src/app/interfaces/movie';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  searchResponse$: Observable<SearchResponse | undefined>;
  currentPage: number;
  totalPages: number;
  pageNumbers: number[];
  private _maxPages: number=5;

  constructor(private _omdbService: OmdbService) { 
    this.searchResponse$ = this._omdbService.searchResponse$.asObservable();

    this._omdbService.searchResponse$
    .pipe(
      tap((sr:SearchResponse)=> this.totalPages = sr ? Math.min(this._maxPages, Math.ceil(+sr.totalResults/10)): 0),
      tap((sr:SearchResponse)=> this.pageNumbers = Array(this.totalPages).fill(0).map((x,i)=>i+1) )
    )
    .subscribe();

    this._omdbService.currentPage$
    .pipe(
      tap((cp: number)=> this.currentPage = cp),
    )
    .subscribe();       
  }

  ngOnInit() {
  }


  pager(page:number){
    this._omdbService.pager(page);
  }

}
