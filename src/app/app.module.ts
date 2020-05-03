import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TiendaComponet} from './components/tienda/tienda.component';
@NgModule({
  declarations: [
    AppComponent,
    TiendaComponet,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
