import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent, FooterComponent } from './core';

const components = [HeaderComponent, FooterComponent];

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, ...components],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
