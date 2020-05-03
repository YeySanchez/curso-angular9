import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector:'parques',
    
    templateUrl: './parques.component.html',
    styleUrls: ['./parques.component.css'],
  })
  export class ParquesComponet {
    @Input('metros_cuadrados') metros: number;
    @Input() nombre: string;
    public vegetacion: string;
    public abierto: boolean;
    
    @Output()pasameLosDatos= new EventEmitter();

    constructor(){
      this.nombre ='Este es el nombre del parque ';
      this.metros= 459;
      this.vegetacion ='alta';
      this.abierto= true;
    }
    emitirEvento(){
      this.pasameLosDatos.emit({
        'nombre':this.nombre,
        'metros':this.metros,
        'vegetacion':this.vegetacion,
        'abierto':this.abierto,

      });

    }
  }