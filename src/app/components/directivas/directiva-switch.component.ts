import { Component} from '@angular/core';

@Component ({
    selector: 'directiva-switch',
    template: `
    <div [ngSwitch]="valor">
    <div *ngSwitchCase=" 'angular' ">Angular</div>
    <div *ngSwitchCase=" 'react' ">React</div>
    <div *ngSwitchDefault>No hay nada</div>
    </div> 

    `
})

export class DirectivaSwitchComponent{
   valor: String = 'react'; 
}