import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{routing, appRoutingProviders} from'./app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
// IMPORTAR MODULO ModuloEmailModule//
import {AdminModule} from './admin/admin.module';
import {ModuloEmailMoule} from './moduloemail/moduloemail.module'


import { AppComponent } from './app.component';
import {TiendaComponet} from './components/tienda/tienda.component';
import {ParquesComponet} from './components/parques/parques.component' ;
import {AnimalsComponent} from './components/animals/animals.component' ;
import {ContactComponent} from './components/contact/contact.component';
import {HomeComponent} from './components/home/home.component';
import{KeepersComponent} from './components/keepers/keepers.component';
import{RegisterComponent}from './components/register/register.component';
import{LoginComponenent} from './components/login/login.component';

import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    TiendaComponet,
    ParquesComponet,
    AnimalsComponent,
    ContactComponent,
    HomeComponent,
    KeepersComponent,
    RegisterComponent,
    LoginComponenent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    ModuloEmailMoule,
    AdminModule
    
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
