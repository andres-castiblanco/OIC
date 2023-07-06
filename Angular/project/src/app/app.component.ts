import { Component } from '@angular/core';
import { ValrelacionesService } from '../app/servicios/valrelaciones/valrelaciones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public valrelacionesService: ValrelacionesService) {}
  title = 'Project';
}
