import { NgModule } from '@angular/core';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { Logger } from 'src/app/core/logger';

const log = new Logger('Country');

@NgModule({
  imports: [CountryRoutingModule],
  declarations: [CountryComponent],
})
export class CountryModule {
  constructor() {
    log.info('Started Country!!!');
  }
}
