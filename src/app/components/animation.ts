import {animate,state,style,transition,trigger} from '@angular/animations'

//exportar una variable en angular
export const fundido =
trigger('fadeIn',[
   
    transition (':enter',[
        style({
            opacity: 0
        }),
        animate('500ms linear',
        style({
            opacity: 1
        }))
    ])
     
]);