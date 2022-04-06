import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../types/hero';
import { MarvelHeroService } from '../../services/marvel-hero.service';

@Component({
  selector: 'app-card-marvel-hero',
  templateUrl: './card-marvel-hero.component.html',
  styleUrls: ['./card-marvel-hero.component.scss'],
})
export class CardMarvelHeroComponent implements OnInit {
  @Input() cardContent: Hero;
  @Output() emitUpdateCards: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private marvelHeroService: MarvelHeroService
  ) {}

  ngOnInit(): void {}

  onEditClick(title: string | undefined) {
    if (title) {
      this.router
        .navigate([`/edit-marvel-hero/${title}`])
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    }
  }

  onDeleteClick(id: string | undefined) {
    if (id) {
      this.marvelHeroService.deleteMarvelHero(id).subscribe({
        next: () => {
          this.emitUpdateCards.emit(true);
        },
        error: (err) => {
          console.log('err', err);
        },
      });
    }
  }
}
