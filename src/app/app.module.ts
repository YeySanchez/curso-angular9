import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {TiendaComponet} from './components/tienda/tienda.component';
import {ParquesComponet} from './components/parques/parques.component' ;
  

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponet,
    ParquesComponet,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
