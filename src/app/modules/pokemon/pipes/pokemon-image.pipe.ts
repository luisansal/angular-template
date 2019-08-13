import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pokemonImage' })
export class PokemonImage implements PipeTransform {
  transform(value: number) {
    return `https://belcorp-taller-pokemon.s3-us-west-2.amazonaws.com/pokemones/${value}.svg`;
  }
}
