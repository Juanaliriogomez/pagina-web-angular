import { Component} from '@angular/core';

@Component({
    selector: 'directiva-If',
    template: `
    <div ngIf= "cargar">
    <h1>Bienvenido</h1>
    </div>
    `
})

export class DirectivaIfComponent{
    cargar:Boolean = true;
}