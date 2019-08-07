import { NgModule } from '@angular/core';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';

@NgModule({
  imports: [PokemonRoutingModule],
  declarations: [PokemonComponent],
})
export class PokemonModule {}
