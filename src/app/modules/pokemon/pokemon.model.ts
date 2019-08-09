export interface Pokemon {
  id: number;
  name: string;
  experience: number;
  height: number;
  weight: number;
  images: PokemonImages;
}

export interface PokemonImages {
  normal: string;
  shiny: string;
}
