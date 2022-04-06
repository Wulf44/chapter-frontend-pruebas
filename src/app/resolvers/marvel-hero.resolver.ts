import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { from, Observable } from 'rxjs';
import { Hero } from '../types/hero';
import { MarvelHeroService } from '../services/marvel-hero.service';

@Injectable({
  providedIn: 'root',
})
export class MarvelHeroResolver implements Resolve<Hero> {
  constructor(private marvelHeroService: MarvelHeroService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Hero> {
    const { title } = route.params;
    return from(this.marvelHeroService.getMarvelHeroByTitle(title));
  }
}
