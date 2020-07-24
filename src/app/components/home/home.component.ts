import { Component,OnInit} from '@angular/core';
//importar componente que creamos en animation.ts
import {fadeIn} from '../animation';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  //traer el atributo animation
  animations: [fadeIn]
  
})
export class HomeComponent implements OnInit{
  title = 'Bienvenido NGZOO';
  ngOnInit (){
      console.log('home.component cargado!!');
  }
}
