//importar las clases
import {ModuleWithProviders, Component} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
//importar los componetes de nuestas otras pafinas nos podemos dirgira a nuestro app.module y copiarlos 
import {TiendaComponet} from './components/tienda/tienda.component';
import {AnimalsComponent} from './components/animals/animals.component' ;
import {ContactComponent} from './components/contact/contact.component';
import {HomeComponent} from './components/home/home.component';
import{KeepersComponent} from './components/keepers/keepers.component';

//amos a crear un array para nuestreo areglo 
const appRoutes: Routes =[//array de rutas
    {path:'', component: HomeComponent},//direccionamientoa tienda cuando el path esta vacio
    {path: '',redirectTo: 'home',pathMatch:'full'},//haga redireccion en tienda 
    {path:'home', component: HomeComponent},//direccionamiento en tienda 
    {path:'animales', component: AnimalsComponent},
    {path: 'contactos',component: ContactComponent},
    {path: 'cuidadores',component: KeepersComponent},
    {path:'tienda',component:TiendaComponet},
    {path:'**', component: HomeComponent}//por si escriben mal la url te direccione a tienda
];//finarray
  
//exportar los proviters de la ruta
export const appRoutingProviders: any [] = []; //arreglo vacio 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);