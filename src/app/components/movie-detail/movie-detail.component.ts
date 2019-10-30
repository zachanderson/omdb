import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie:MovieDetail;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.movie = this._route.snapshot.data.movie;
  }

}
