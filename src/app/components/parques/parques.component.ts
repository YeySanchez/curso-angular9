import { Component } from '@angular/core';

@Component({
    selector:'parques',
    
    templateUrl: './parques.component.html',
    styleUrls: ['./parques.component.css'],
  })
  export class ParquesComponet {
    public metros: number;
    public nombre: string;
    public vegetacion: string;
    public abierto: boolean;

    constructor(){
      this.nombre ='Este es el nombre del parque ';
      this.metros= 459;
      this.vegetacion ='alta';
      this.abierto= true;
    }
  }