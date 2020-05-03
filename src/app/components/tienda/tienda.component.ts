import { Component } from '@angular/core';

@Component({
    selector:'tienda',
    
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css'],
  })
  export class TiendaComponet {
    public titulo: string;
    public NombreDelParque: string;

    constructor(){
        this.titulo = 'esta es la tienda';
    }
    MostrarNombre(){
      console.log(this.NombreDelParque);
    }
  }