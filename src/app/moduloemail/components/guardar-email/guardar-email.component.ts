import { Component,DoCheck,OnInit } from '@angular/core';

@Component({
  selector: 'guardar-email',
  template: `<h2>{{title}}</h2>
  <input type="text" [(ngModel)]="emailContacto"/>
  <button (click) ="guardarEmail()">Guardar email</button>`

})
export class GuardarEmailComponent {
  title = 'guardar email';
  //(Pso1) mostar contacto crear emailContacto
  emailContacto: string;
  guardarEmail(){
    //validamos que nos este guardando nuestro correo con console.log
    //console.log(this.emailContacto);
    // guardar en el navegador LocalStorage ejemplo como si fueramos a guardar una sesion ene el navegador 
    localStorage.setItem('emailContacto',this.emailContacto);
    console.log(localStorage.getItem('emailContacto'));
  }
 
}
