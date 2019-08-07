import { NgModule } from '@angular/core';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';

@NgModule({
  imports: [CountryRoutingModule],
  declarations: [CountryComponent],
})
export class CountryModule {}
