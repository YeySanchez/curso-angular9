import {animate,state,style,transition,trigger} from '@angular/animations'


//exportar una variable en angular
export const fadeIn =
trigger('fadeIn',[
   
    transition (':enter',[
        style({
            opacity: 0,
            transform: 'translateY(-15%)'//rotate(150deg)
            
        }),
        animate('500ms linear',
        style({
            opacity: 1,
            transform: 'translateY(0)'//,rotate(150deg)'
        
            
        }))
    ])
     
]);