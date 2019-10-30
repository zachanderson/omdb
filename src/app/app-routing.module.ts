import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieResolver } from './helpers/movie.resolver';


const routes: Routes = [{
path:'',
pathMatch:'full',
component: MovieSearchComponent

},{
path:'movies/:id',
component: MovieDetailComponent,
resolve:{movie: MovieResolver}
},
{
  path:'**',
  component:NotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
