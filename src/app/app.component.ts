import { Component } from '@angular/core';

import { DataService } from './services/datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pagina-web-angular';

  datosAlumnos: any = [];

  constructor( private dataService: DataService ) {
    this.datosAlumnos = dataService.obtenerAlumnos()
  }
}
