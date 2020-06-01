import { Component,OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;
@Component({
    selector:'tienda',
    
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css'],
  })
  export class TiendaComponet implements OnInit {
    public titulo: string;
    public NombreDelParque: string;
    public Miparque;
    constructor(){
        this.titulo = 'esta es la tienda';
    }
    ngOnInit(){
      $('#textojq').hide();
      $('#botonjq').click(function(){
        console.log('click desde jquery')
        $('#textojq').slideToggle();
      });
    }
    MostrarNombre(){
      console.log(this.NombreDelParque);
    }
    verDatosParque(event){
      console.log(event);
      this.Miparque = event;

    }
  }