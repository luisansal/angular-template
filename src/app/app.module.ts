import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent, FooterComponent } from './core';

const components = [HeaderComponent, FooterComponent];

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent, ...components],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
