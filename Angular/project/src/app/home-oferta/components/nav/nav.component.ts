import { Component } from '@angular/core';
import { ValrelacionesService } from 'src/app/servicios/valrelaciones/valrelaciones.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(public valrelacionesService: ValrelacionesService) {}
}
