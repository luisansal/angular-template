import { NgModule } from '@angular/core';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonComponent } from './pokemon.component';
import { Logger } from 'src/app/core/logger';
import { PokemonService } from './pokemon.service';

import { PokemonItemComponent } from './components';

const log = new Logger('Pokemon');

@NgModule({
  imports: [CommonModule, FormsModule, PokemonRoutingModule],
  declarations: [PokemonComponent, PokemonItemComponent],
  providers: [PokemonService],
})
export class PokemonModule {
  constructor() {
    log.info('Started Pokemon!!!');
  }
}
