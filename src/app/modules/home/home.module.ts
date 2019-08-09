import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { Logger } from 'src/app/core/logger';

const log = new Logger('Home');

@NgModule({
  imports: [HomeRoutingModule],
  declarations: [HomeComponent],
})
export class HomeModule {
  constructor() {
    log.info('Started Home!!!');
  }
}
