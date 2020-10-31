
import{Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';

@Component({
    selector:'Login',
    templateUrl: './login.component.html'
})

export class LoginComponenent implements OnInit {
    public title: String;

    constructor( 
        private _route: ActivatedRoute,
        private _router: Router
        
        ){
            this.title ='Identificate'
        }
        ngOnInit(){
            console.log('login.component cargando exitosamente')
        }
}

