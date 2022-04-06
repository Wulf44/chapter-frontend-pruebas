import { Component, OnInit } from '@angular/core';
import { Hero } from '../../types/hero';
import { MarvelHeroService } from '../../services/marvel-hero.service';
import { from, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-marvel-heroes',
  templateUrl: './marvel-heroes.component.html',
  styleUrls: ['./marvel-heroes.component.scss'],
})
export class MarvelHeroesComponent implements OnInit {
  cards$: Observable<Hero[]>;
  disabledHeader: boolean = true;

  searchHero: string = '';

  constructor(
    private marvelHeroService: MarvelHeroService
  ) {}

  ngOnInit(): void {
    this.cards$ = this.getCards();
  }

  updateCards($event?: boolean) {
    this.cards$ = this.getCards();
  }

  getCards() {
    return from(this.marvelHeroService.getAllMarvelHeroes());
  }
}
