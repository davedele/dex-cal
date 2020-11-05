import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DexCal2Module } from '../../../dex-cal/src/lib/dex-cal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, DexCal2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
