import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Logger } from 'src/app/core';
import { Pokemon } from './pokemon.model';

const log = new Logger('Pokemon Component');
const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  title = 'This is pokemon';
  id: number;
  pokemon: Pokemon;

  constructor(private service: PokemonService) {}

  ngOnInit() {
    this.service.multipleSearch(10, 20, 30).subscribe((data: Pokemon[]) => {
      log.info(data);
    });
  }

  buscar() {
    this.loadPokemon(this.id);
  }

  loadPokemon(id: number) {
    if (id === 0) {
      id = randomInt(1, 150);
    }

    this.service.search(id).subscribe((data: Pokemon) => {
      this.pokemon = data;
      log.info(this.pokemon);
    });
  }
}
