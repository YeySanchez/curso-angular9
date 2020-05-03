import { Component } from '@angular/core';

@Component({
    selector:'tienda',
    
    template: `<h1>{{titulo}}</h1>`,
    styles: ['h1 {color:blue}']
  })
  export class TiendaComponet {
    public titulo: string;

    constructor(){
        this.titulo = 'esta es la tienda';
    }
  }