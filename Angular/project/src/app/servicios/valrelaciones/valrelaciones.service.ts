import { Injectable } from '@angular/core';
import { idenPreI } from '../../modelos/crear-oferta-iden-pre.interface';
import { interVistasOfertas } from '../../modelos/interfece-vistas-ofertas';
import {
  locPreI,
  locPreIDir,
} from 'src/app/modelos/crear-oferta-loc-pre.interface';
@Injectable({
  providedIn: 'root',
})
export class ValrelacionesService {
  constructor() {}

  idenPredio: idenPreI = {
    id_oferta: undefined,
    npn: undefined,
    npa: undefined,
    codigo_homologado: undefined,
    matricula: undefined,
    condicion_juridica: undefined,
    tipo_oferta: undefined,
    tipo_predio: undefined,
    oferta_origen: undefined,
    estado_oferta: 1,
    obs_verifica: 'Sin comentarios' as unknown | Text,
  };

  locPre: locPreI = {
    id_oferta: this.idenPredio.id_oferta,
    departamento: undefined,
    municipio: undefined,
    barrio: undefined,
    vereda: undefined,
    latitud: undefined,
    longitud: undefined,
    direccion: undefined,
  };

  locPreDir: locPreIDir = {
    id_oferta: this.idenPredio.id_oferta,
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

  vistasHabilitar: interVistasOfertas = {
    noVistaIdenPreOfer: true,
    noVistaLocOfer: false,
    noVistaDatGen: false,
    noVistaInfoFisi: false,
    noVistaInfoEnoco: false,
    noVistaInfoFuen: false,
  };

  set setIdenPredio(idenPredioCom: idenPreI) {
    this.idenPredio = { ...idenPredioCom };
  }

  set setLocaPredio(locaPredioCom: locPreI) {
    this.locPre = { ...locaPredioCom };
  }

  set setLocaPredioDir(locaPredioDirCom: locPreIDir) {
    this.locPreDir = { ...locaPredioDirCom };
  }

  habilitarVista(vista: keyof interVistasOfertas, controlVista: boolean) {
    this.vistasHabilitar[vista] =
      this.idenPredio.id_oferta === undefined || controlVista ? false : true;
  }
}
