import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { SearchFormComponent } from './components/movie-search/search-form/search-form.component';
import { SearchResultsComponent } from './components/movie-search/search-results/search-results.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieResolver } from './helpers/movie.resolver';
import { MovieRatingsComponent } from './components/movie-ratings/movie-ratings.component';
import { BarPipe } from './helpers/bar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    SearchFormComponent,
    SearchResultsComponent,
    NotFoundComponent,
    MovieDetailComponent,
    MovieRatingsComponent,  
    BarPipe,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
