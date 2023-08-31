import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ValrelacionesService } from '../../../servicios/valrelaciones/valrelaciones.service';
import { EditarService } from '../../../servicios/editar/editar.service';
import { ValidarService } from '../../../servicios/validar/validar.service';
import { ConsultaService } from '../../../servicios/consulta/consulta.service';

import { infoPerI } from '../../../modelos/crear-oferta-personas.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private ValrelacionesService: ValrelacionesService,
    private editar: EditarService,
    private validar: ValidarService,
    private consultar: ConsultaService
  ) {}

  personaLogin: infoPerI = this.ValrelacionesService.infoPer;

  cerrarSesion() {
    this.ValrelacionesService.limpiarVariablesControles();
    this.editar.limpiarVariablesControles();
    this.validar.limpiarVariablesControles();
    this.consultar.limpiarVariablesConsulta();
    localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
