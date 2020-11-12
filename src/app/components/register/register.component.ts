import {Component,OnInit} from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
import { from } from 'rxjs';
import {User} from '../../models/user';
//video 75
import {GLOBAL} from '../../services/global';
import{UserService} from '../../services/user.service';

@Component({
    selector: 'Register',
    templateUrl: './register.component.html',
    //v75 cargar servicioa
   providers: [UserService],
})
export class RegisterComponent implements OnInit{
    public title: String;
    public user: User;

    constructor(
        private _route:ActivatedRoute,
        private _router:Router,
        //75 carf¡gar sevicios 
        private _userService: UserService
    ){
        this.title= 'Registro';
        this.user= new User('','','','','','ROLE_USER','');
    }
    ngOnInit(){
        console.log('register.compoonent cargado exitosamente')
       console.log(this._userService.register())
    }
    onSubmit(){
        console.log(this.user)
    }
}