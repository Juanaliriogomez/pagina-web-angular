import { Component} from '@angular/core';

@Component ({
    selector: 'directiva-for',
    template: `
    <ul>
    <li *ngFor="let nombre of nombres">
    {{nombre}}
    </li>
    </ul>`
})

export class DirectivaForComponent{
    nombres: String[]=
    ['juan', 'pepe', 'luisa', 'luisa']
}