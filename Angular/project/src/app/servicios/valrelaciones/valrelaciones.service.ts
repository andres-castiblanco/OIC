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
    id_oferta: null,
    npn: '',
    npa: '',
    codigo_homologado: '',
    matricula: '',
    condicion_juridica: '',
    tipo_oferta: '',
    tipo_predio: '',
    oferta_origen: '',
    estado_oferta: 1,
    obs_verifica: 'Sin comentarios' as unknown | Text,
  };

  locPre: locPreI = {
    id_oferta: this.idenPredio.id_oferta,
    departamento: null,
    municipio: null,
    barrio: null,
    vereda: null,
    latitud: null,
    longitud: null,
    direccion: null,
  };

  locPreDir: locPreIDir = {
    id_oferta: this.idenPredio.id_oferta,
    dir01: null,
    dir02: null,
    dir03: null,
    dir04: null,
    dir05: null,
    dir06: null,
    dir07: null,
    dir08: null,
    dirParte1: null,
    dirParte2: null,
    dirParte3: null,
    dirCompleta: null,
    dirrur: null,
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
      this.idenPredio.id_oferta === null || controlVista ? false : true;
  }
}
