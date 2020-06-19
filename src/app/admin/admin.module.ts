//modules//
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AdminRoutingModule}from './admin-routing.module';


//componetes//
import {MainComponent} from './components/main/main.component';
import {EditComponent} from './components/edit/edit.component';
import {AddComponent} from './components/add/add.component';
import {ListComponent} from './components/list/list.component';import { from } from 'rxjs';

@NgModule({
    declarations: [
    MainComponent,
    ListComponent,
    AddComponent,
    EditComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        AdminRoutingModule
    ],
    exports: [
        MainComponent,
        ListComponent,
        AddComponent,
        EditComponent

    ],
    providers:[

    ]
})
export class AdminModule {}