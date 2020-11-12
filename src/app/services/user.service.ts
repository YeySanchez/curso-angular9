import { from } from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClientModule, HttpResponse, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import{Observable} from 'rxjs/observable';
import{GLOBAL} from './global';

@Injectable()
export class UserService {
    public url: string;

    constructor(private _http: HttpClientModule){
        this.url = GLOBAL.url;
    }
    register(){
        return"texto desde el servicio";
    }
}
