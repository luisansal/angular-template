import { NgModule } from '@angular/core';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { Logger } from 'src/app/core/logger';

const log = new Logger('Pokemon');

@NgModule({
  imports: [PokemonRoutingModule],
  declarations: [PokemonComponent],
})
export class PokemonModule {
  constructor() {
    log.info('Started Pokemon!!!');
  }
}
