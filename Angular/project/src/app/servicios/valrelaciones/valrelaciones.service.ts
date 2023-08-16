import { Injectable } from '@angular/core';
import { idenPreI } from '../../modelos/crear-oferta-iden-pre.interface';
import { interVistasOfertas } from '../../modelos/interfece-vistas-ofertas';
import {
  locPreI,
  locPreIDir,
} from 'src/app/modelos/crear-oferta-loc-pre.interface';
import { datGenI } from '../../modelos/crear-oferta-datgen.interface';
import { infoFisiI } from '../../modelos/crear-oferta-inf-fis.interface';
import { infoEconoI } from '../../modelos/crear-oferta-inf-eco.interface';
import { infoFuenteI } from '../../modelos/crear-oferta-inf-fuente.interface';
import { infoPerI } from '../../modelos/crear-oferta-personas.interface';
import { infoAdminI } from '../../modelos/crear-oferta-inf-admin.interface';

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
    area_construccion: undefined,
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

  infoEnono: infoEconoI = {
    id_oferta: this.idenPredio.id_oferta,
    valor_oferta_inicial: undefined,
    porcentaje_negociacion: undefined,
    valor_oferta_final: undefined,
    valor_terreno: undefined,
    valor_construccion_m2: undefined,
    valor_area_privada: undefined,
    valor_cultivo: undefined,
    avaluo_catastral: undefined,
    valor_administracion: undefined,
    valor_arriendo_inicial: undefined,
    valor_arriendo_final: undefined,
    valor_terraza_balcon_patio: undefined,
    valor_garajes: undefined,
    valor_depositos: undefined,
    valor_anexidades: undefined,
  };

  infoFuente: infoFuenteI = {
    id_oferta: this.idenPredio.id_oferta,
    nombre_oferente: undefined,
    numero_contacto: undefined,
    url: undefined,
    enlace_interno_foto_predio: undefined,
    enlace_documentos: undefined,
    observaciones: undefined,
  };

  infoPer: infoPerI = {
    ti_persona: undefined,
    ni_persona: undefined,
    nombres: undefined,
    apellidos: undefined,
    email: undefined,
    telefono: undefined,
    area: undefined,
    rol: undefined,
  };

  infoPerVeri: infoPerI = {
    ti_persona: undefined,
    ni_persona: undefined,
    nombres: undefined,
    apellidos: undefined,
    email: undefined,
    telefono: undefined,
    area: undefined,
    rol: undefined,
  };

  infoAdmin: infoAdminI = {
    id_oferta: this.idenPredio.id_oferta,
    ti_persona_captura: undefined,
    ni_persona_captura: undefined,
    email_persona_captura: undefined,
    area_persona_captura: undefined,
    ti_persona_verifica: undefined,
    ni_persona_verifica: undefined,
    email_persona_verifica: undefined,
    area_persona_verifica: undefined,
  };

  vistasHabilitar: interVistasOfertas = {
    noVistaIdenPreOfer: true,
    noVistaLocOfer: false,
    noVistaDatGen: false,
    noVistaInfoFisi: false,
    noVistaInfoEnoco: false,
    noVistaInfoFuen: false,
    noEnvioTerminar: false,
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

  set setInfoFisPredio(InfoFisiPredio: infoFisiI) {
    this.infoFis = { ...InfoFisiPredio };
  }

  set setInfoEconoPredio(InfoEconoPredio: infoEconoI) {
    this.infoEnono = { ...InfoEconoPredio };
  }

  set setInfoFuentePredio(InfoFuentePredio: infoFuenteI) {
    this.infoFuente = { ...InfoFuentePredio };
  }

  set setInfoPersona(InfoPersona: infoPerI) {
    this.infoPer = { ...InfoPersona };
  }

  set setInfoPersonaVeri(infoPersonaVeri: infoPerI) {
    this.infoPerVeri = { ...infoPersonaVeri };
  }

  set setInfoAdminePredio(InfoAdminPredio: infoAdminI) {
    this.infoAdmin = { ...InfoAdminPredio };
  }

  habilitarVista(vista: keyof interVistasOfertas, controlVista: boolean) {
    this.vistasHabilitar[vista] =
      this.idenPredio.id_oferta === undefined || controlVista ? false : true;
  }
}
