import { Injectable } from '@angular/core';

import {
  consulOferI,
  consulLocPreIDir,
} from '../../modelos/consulta-oferta.interface';
import { resconsulOferI } from '../../modelos/res-consulta-oferta.interface';
import { ValrelacionesService } from '../valrelaciones/valrelaciones.service';

@Injectable({
  providedIn: 'root',
})
export class ConsultaService {
  constructor(public valrelacionesService: ValrelacionesService) {}

  consultaOfer: consulOferI = {
    id_oferta: undefined,
    fecha: undefined,
    npn: undefined,
    npa: undefined,
    matricula: undefined,
    departamento: undefined,
    municipio: undefined,
    direccion: undefined,

    email: this.valrelacionesService.infoPer.email,
    rol: this.valrelacionesService.infoPer.rol,
  };

  consultaOferDir: consulLocPreIDir = {
    id_oferta: this.consultaOfer.id_oferta,
    dir01: undefined,
    dir02: undefined,
    dir03: undefined,
    dir04: undefined,
    dir05: undefined,
    dir06: undefined,
    dir07: undefined,
    dir08: undefined,
    dirParte1: undefined,
    dirParte2: undefined,
    dirParte3: undefined,
    dirCompleta: undefined,
    dirrur: undefined,
  };

  set setConsulOfer(consulOfer: consulOferI) {
    this.consultaOfer = { ...consulOfer };
  }

  set setConsulOferDir(consulOferDir: consulLocPreIDir) {
    this.consultaOferDir = { ...consulOferDir };
  }

  controlVacios() {
    let mensaje = ``;
    if (
      (this.consultaOfer.id_oferta === undefined ||
        this.consultaOfer.id_oferta === null ||
        Number.isNaN(this.consultaOfer.id_oferta)) &&
      (this.consultaOfer.fecha === undefined ||
        this.consultaOfer.fecha === null ||
        Number.isNaN(this.consultaOfer.fecha) ||
        this.consultaOfer.fecha === '') &&
      (this.consultaOfer.npn === undefined ||
        this.consultaOfer.npn === null ||
        Number.isNaN(this.consultaOfer.npn)) &&
      (this.consultaOfer.npa === undefined ||
        this.consultaOfer.npa === null ||
        Number.isNaN(this.consultaOfer.npa)) &&
      (this.consultaOfer.matricula === undefined ||
        this.consultaOfer.matricula === null ||
        this.consultaOfer.matricula === '') &&
      (this.consultaOfer.departamento === undefined ||
        this.consultaOfer.departamento === null ||
        this.consultaOfer.departamento === '') &&
      (this.consultaOfer.municipio === undefined ||
        this.consultaOfer.municipio === null ||
        this.consultaOfer.municipio === '') &&
      (this.consultaOfer.direccion === undefined ||
        this.consultaOfer.direccion === null ||
        this.consultaOfer.direccion === '')
    ) {
      mensaje = `${mensaje}- Error: ingrese a menos uno de los campos.`;
    }
    return mensaje;
  }

  limpiarVariablesConsulta() {
    this.consultaOfer.id_oferta = undefined;
    this.consultaOfer.fecha = undefined;
    this.consultaOfer.npn = undefined;
    this.consultaOfer.npa = undefined;
    this.consultaOfer.matricula = undefined;
    this.consultaOfer.departamento = undefined;
    this.consultaOfer.municipio = undefined;
    this.consultaOfer.direccion = undefined;

    this.consultaOferDir.id_oferta = undefined;
    this.consultaOferDir.dir01 = undefined;
    this.consultaOferDir.dir02 = undefined;
    this.consultaOferDir.dir03 = undefined;
    this.consultaOferDir.dir04 = undefined;
    this.consultaOferDir.dir05 = undefined;
    this.consultaOferDir.dir06 = undefined;
    this.consultaOferDir.dir07 = undefined;
    this.consultaOferDir.dir08 = undefined;
    this.consultaOferDir.dirParte1 = undefined;
    this.consultaOferDir.dirParte2 = undefined;
    this.consultaOferDir.dirParte3 = undefined;
    this.consultaOferDir.dirCompleta = undefined;
    this.consultaOferDir.dirrur = undefined;
  }
}
