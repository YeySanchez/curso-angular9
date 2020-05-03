import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.coponent.html',
  
})
export class ContactComponent implements OnInit{
  title = 'Contacto';
  ngOnInit (){
      console.log('contact.coponent cargado!!');
  }
}