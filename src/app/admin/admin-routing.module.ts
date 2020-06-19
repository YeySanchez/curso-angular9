import {NgModule, Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//importar componentes//
import {MainComponent} from './components/main/main.component';
import {EditComponent} from './components/edit/edit.component';
import {AddComponent} from './components/add/add.component';
import {ListComponent} from './components/list/list.component';

//CREAR ROUTING DE LOS COMPONENTES//

const adminRoutes: Routes=[
{
    path: 'admin-panel',
    component:MainComponent,
    children:[
        {path:'',redirectTo: 'listado', pathMatch: 'full'},
        {path: 'listado', component: ListComponent},
        {path: 'crear', component: AddComponent},
        {path: 'editar', component: EditComponent}
    ]
}
];
@NgModule({
    imports:[
        RouterModule.forChild(adminRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AdminRoutingModule{}