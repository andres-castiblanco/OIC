import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ValrelacionesService } from '../../../servicios/valrelaciones/valrelaciones.service';
import { infoPerI } from '../../../modelos/crear-oferta-personas.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private ValrelacionesService: ValrelacionesService
  ) {}

  personaLogin: infoPerI = this.ValrelacionesService.infoPer;

  cerrarSesion() {
    localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigate(['Login']);
  }
}
