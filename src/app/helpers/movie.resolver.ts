import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MovieDetail } from '../interfaces/movie';
import { Observable } from 'rxjs';
import { OmdbService } from '../services/omdb.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class MovieResolver implements Resolve<MovieDetail>{

    constructor(private _omdbService: OmdbService){
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MovieDetail | Observable<MovieDetail> | Promise<MovieDetail> {
        return this._omdbService.getSingle(route.params.id)
    }


}