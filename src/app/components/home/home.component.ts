import { Component,OnInit} from '@angular/core';
//importar componente que creamos en animation.ts
import {fundido} from '../animation';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  //traer el atributo animation
  animations: [fundido]
  
})
export class HomeComponent implements OnInit{
  title = 'Bienvenido NGZOO';
  ngOnInit (){
      console.log('home.component cargado!!');
  }
}
