//importar modulos necesraioos para crar modulos //
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//importar componentws dentro del modumlo mainemail//
import {GuardarEmailComponent} from './components/guardar-email/guardar-email.component';
import {MostrarEmailComponent} from './components/mostrar-email/mostrar-email.component';
import {MainEmailComponent} from './components/main-email/main-email.component';

//Dcorador NgModule para cargar componentes y la configuracion de los modulos //
@NgModule({
    declarations:[
    GuardarEmailComponent,
    MostrarEmailComponent,
    MainEmailComponent,
    

    ],
    imports:[
        CommonModule,
        FormsModule,
        BrowserModule

    ],
    exports: [MainEmailComponent]
})

export class ModuloEmailMoule {}