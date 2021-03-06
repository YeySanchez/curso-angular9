import { Component,DoCheck,OnInit } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  template: `<h2>{{title}}</h2>
     <!--motrar datos (pso3) mostar datos al lado de nuestra barra de navegacion-->
     <span *ngIf= "emailContacto"><strong>Email de contacto </strong> {{emailContacto}}
      <button (click)="Eeliminarcontacto()">Eeliminar emailcontacto</button></span><hr>
    `
})
export class MostrarEmailComponent implements DoCheck,OnInit {
  title = 'Mostrar email';
  //(Pso1) mostar contacto crear emailContacto
  emailContacto: string;

  ngDoCheck(){
    //console.log('El DoCheck se ha ejecuadp')
    //motrar contacto 
    //(pso4) cada vez que cambiemos el contacto este se actualice en la barra de navegacion 
    console.log('El DoCheck se ha ejecuadp')
    this.emailContacto =localStorage.getItem('emailContacto');
  }
  ngOnInit(){
    //esto permitira que cuando naveguemos en nustras pestañas podremos visylizar nuestro email. !claro en consola 
    //console.log(localStorage.getItem('emailContacto'));
    //(Pso2)mostrar contacto asignar el valor que tiene getItem 
   this.emailContacto =localStorage.getItem('emailContacto');

  }
  //metodo eliminaremail removeItem
  Eeliminarcontacto(){
    localStorage.removeItem('emailContacto');
    //vaciar la cache de la consola 
    localStorage.clear();
    this.emailContacto = null
  }
}
