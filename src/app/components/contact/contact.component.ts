import { Component,OnInit} from '@angular/core';
import {fadeIn} from '../animation';

@Component({
  selector: 'contact',
  templateUrl: './contact.coponent.html',
  animations: [fadeIn]
})
export class ContactComponent implements OnInit{
  title = 'Contacto';
  emailContacto: string;
  ngOnInit (){
  
      console.log('contact.coponent cargado!!');
  }
  guardarEmail(){
    //validamos que nos este guardando nuestro correo con console.log
    //console.log(this.emailContacto);
    // guardar en el navegador LocalStorage ejemplo como si fueramos a guardar una sesion ene el navegador 
    localStorage.setItem('emailContacto',this.emailContacto);
    console.log(localStorage.getItem('emailContacto'));

  }
}