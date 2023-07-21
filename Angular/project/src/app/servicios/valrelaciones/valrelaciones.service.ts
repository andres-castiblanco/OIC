import { Injectable } from '@angular/core';
import { idenPreI } from '../../modelos/crear-oferta-iden-pre.interface';
import { interVistasOfertas } from '../../modelos/interfece-vistas-ofertas';
import {
  locPreI,
  locPreIDir,
} from 'src/app/modelos/crear-oferta-loc-pre.interface';
import { datGenI } from '../../modelos/crear-oferta-datgen.interface';
import { infoFisiI } from '../../modelos/crear-oferta-inf-fis.interface';
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

  datGen: datGenI = {
    id_oferta: this.idenPredio.id_oferta,
    derecho_tipo: undefined,
    tipo_inmueble: undefined,
    si_valor_incluye_anexidades: undefined,
    fecha: undefined,
    tiempo_oferta_mercado: undefined,
    proyecto_inmobiliario: undefined,
    proyecto_descripcion: undefined,
  };

  infoFis: infoFisiI = {
    id_oferta: this.idenPredio.id_oferta,
    area_terreno: undefined,
    ano_construccion: undefined,
    conservacion: undefined,
    area_privada: undefined,
    destinacion_economica: undefined,
    altura_edificio: undefined,
    numero_piso: undefined,
    area_cultivo: undefined,
    tipo_inmueble_rural: undefined,
    tipologia_tipo: undefined,
    edad_cultivo: undefined,
    tipo_cultivo: undefined,
    coeficiente: undefined,
    servicios_publicos: undefined,
    estrato: undefined,
    garajes: undefined,
    numero_banos: undefined,
    numero_habitaciones: undefined,
    numero_depositos: undefined,
    construcciones_anexas: undefined,
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

  set setDatGenPredio(datGenPredio: datGenI) {
    this.datGen = { ...datGenPredio };
  }

  set setInfoFisPredio(InfofisiPredio: infoFisiI) {
    this.infoFis = { ...InfofisiPredio };
  }

  habilitarVista(vista: keyof interVistasOfertas, controlVista: boolean) {
    this.vistasHabilitar[vista] =
      this.idenPredio.id_oferta === undefined || controlVista ? false : true;
  }
}
