import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
})
export class PokemonItemComponent {
  @Input() pokemon: Pokemon;

  customImage(id: number) {
    return `https://belcorp-taller-pokemon.s3-us-west-2.amazonaws.com/pokemones/${id}.svg`;
  }
}
