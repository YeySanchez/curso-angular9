import { Component,Input,Output,EventEmitter,OnChanges,SimpleChange, SimpleChanges,OnInit,DoCheck,OnDestroy} from '@angular/core';

@Component({
    selector:'parques',
    
    templateUrl: './parques.component.html',
    styleUrls: ['./parques.component.css'],
  })
  export class ParquesComponet implements OnChanges,OnInit,DoCheck,OnDestroy{
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
    ngOnChanges(changes: SimpleChanges){
      //console.log(changes);
      console.log("existen cambios en las propiedades");
    }
    ngOnInit(){
      console.log("metodo OnInit lanzado")
    }
    ngDoCheck(){
      console.log("metodo DoChek ejecutado")
    }
    ngOnDestroy(){
      console.log("se borrarar el componente")
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