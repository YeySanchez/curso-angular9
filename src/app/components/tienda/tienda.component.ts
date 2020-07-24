import { Component,OnInit } from '@angular/core';
//importar librerarias para crerar transiciones en angular v35
import { trigger, state, style, transition, animate} from '@angular/animations';
import {fadeIn} from '../animation';

//declare var jQuery:any;
//declare var $:any;
@Component({
    selector:'tienda', 
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css'],
    //crear array para crear tansformaciones con angular y css v35
    animations: [
      trigger('marcar',[

          state('inactive', style({
            border: '5px solid #ccc'

          })),
          state('active',style({
            border: '5px solid yellow',
            background: 'blue',
            borderRadius: '50px',
            transform: 'scale(1.2)'
          })),
          transition('inactive => active',[animate('3s linear')]),
          transition('active => inactive',[animate('3s linear')])
      ]),
      fadeIn

    ]
    //fin del array
  })
  export class TiendaComponet implements OnInit {
    public titulo: string;
    public NombreDelParque: string;
    public Miparque;
    //crear variable estatus para poder convertir las transiciones de los  estados del boton v35
    public status;

    constructor(){
        this.titulo = 'esta es la tienda';
        this.status = 'inactive';
     //crerar metodo para cambiar las transiciones de los estados del btono v35   
    }
    CambiarEstado(status){
      if(status == 'inactive') {
        this.status= 'active';
      }else{
        this.status= 'inactive';
      }
    }
    ngOnInit(){
     // $('#textojq').hide();
      //$('#botonjq').click(function(){
        //console.log('click desde jquery')
      // $('#textojq').slideToggle();
     // });
      //$("#caja").dotdotdot({});
    }
    MostrarNombre(){
      console.log(this.NombreDelParque);
    }
    verDatosParque(event){
      console.log(event);
      this.Miparque = event;

    }
  }