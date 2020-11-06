import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DexCalModule } from '../../../dex-cal/src/lib/dex-cal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, DexCalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
