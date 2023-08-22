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
    // obs_verifica: 'Sin comentarios' as unknown | Text,
    obs_verifica: 'Sin comentarios',
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

  controles = {
    idenPredio: {
      id_oferta: false,
      npn: true,
      npa: true,
      codigo_homologado: true,
      matricula: true,
      condicion_juridica: false,
      tipo_oferta: false,
      tipo_predio: false,
      oferta_origen: false,
      estado_oferta: true,
      obs_verifica: true,
    },
    locPre: {
      id_oferta: false,
      departamento: false,
      municipio: false,
      barrio: true,
      vereda: true,
      latitud: false,
      longitud: false,
      direccion: true,
    },
    datGen: {
      id_oferta: false,
      derecho_tipo: false,
      tipo_inmueble: false,
      si_valor_incluye_anexidades: false,
      fecha: false,
      tiempo_oferta_mercado: true,
      proyecto_inmobiliario: false,
      proyecto_descripcion: false,
    },
    infoFis: {
      id_oferta: false,
      area_terreno: false,
      area_construccion: false,
      ano_construccion: true,
      conservacion: true,
      area_privada: false,
      destinacion_economica: false,
      altura_edificio: true,
      numero_piso: true,
      area_cultivo: true,
      tipo_inmueble_rural: true,
      tipologia_tipo: false,
      edad_cultivo: true,
      tipo_cultivo: true,
      coeficiente: true,
      servicios_publicos: false,
      estrato: true,
      garajes: true,
      numero_banos: true,
      numero_habitaciones: true,
      numero_depositos: true,
      construcciones_anexas: true,
    },
    infoEnono: {
      id_oferta: false,
      valor_oferta_inicial: false,
      porcentaje_negociacion: false,
      valor_oferta_final: false,
      valor_terreno: false,
      valor_construccion_m2: false,
      valor_area_privada: false,
      valor_cultivo: true,
      avaluo_catastral: true,
      valor_administracion: true,
      valor_arriendo_inicial: false,
      valor_arriendo_final: false,
      valor_terraza_balcon_patio: true,
      valor_garajes: true,
      valor_depositos: true,
      valor_anexidades: true,
    },
    infoFuente: {
      id_oferta: false,
      nombre_oferente: false,
      numero_contacto: false,
      url: false,
      enlace_interno_foto_predio: true,
      enlace_documentos: true,
      observaciones: false,
    },
    infoAdmin: {
      id_oferta: false,
      ti_persona_captura: false,
      ni_persona_captura: false,
      email_persona_captura: false,
      area_persona_captura: false,
      ti_persona_verifica: true,
      ni_persona_verifica: true,
      email_persona_verifica: true,
      area_persona_verifica: true,
    },
  };

  controlesGeneralesVistasMensaje() {
    let mensaje = ``;
    if (
      this.idenPredio.id_oferta === undefined ||
      this.idenPredio.id_oferta === null ||
      Number.isNaN(this.idenPredio.id_oferta) ||
      this.locPre.id_oferta === undefined ||
      this.locPre.id_oferta === null ||
      Number.isNaN(this.locPre.id_oferta) ||
      this.datGen.id_oferta === undefined ||
      this.datGen.id_oferta === null ||
      Number.isNaN(this.datGen.id_oferta) ||
      this.infoFis.id_oferta === undefined ||
      this.infoFis.id_oferta === null ||
      Number.isNaN(this.infoFis.id_oferta) ||
      this.infoEnono.id_oferta === undefined ||
      this.infoEnono.id_oferta === null ||
      Number.isNaN(this.infoEnono.id_oferta) ||
      this.infoFuente.id_oferta === undefined ||
      this.infoFuente.id_oferta === null ||
      Number.isNaN(this.infoFuente.id_oferta) ||
      this.infoAdmin.id_oferta === undefined ||
      this.infoAdmin.id_oferta === null ||
      Number.isNaN(this.infoAdmin.id_oferta)
    ) {
      mensaje = `${mensaje}- El id de la oferta no ha sido asignado, favor revisar pestaña de identificación predio`;
    } else {
      if (
        this.idenPredio.id_oferta === this.locPre.id_oferta &&
        this.locPre.id_oferta === this.datGen.id_oferta &&
        this.datGen.id_oferta === this.infoFis.id_oferta &&
        this.infoFis.id_oferta === this.infoEnono.id_oferta &&
        this.infoEnono.id_oferta === this.infoFuente.id_oferta &&
        this.infoFuente.id_oferta === this.infoAdmin.id_oferta
      ) {
        this.controles.idenPredio.id_oferta = true;
        this.controles.locPre.id_oferta = true;
        this.controles.datGen.id_oferta = true;
        this.controles.infoFis.id_oferta = true;
        this.controles.infoEnono.id_oferta = true;
        this.controles.infoFuente.id_oferta = true;
        this.controles.infoAdmin.id_oferta = true;
      } else {
        mensaje = `${mensaje}- El id de la oferta es diferente al asignado, todos deben de coincidir, por favor repita la pestaña de identificación predio`;
      }
    }
    if (
      this.idenPredio.condicion_juridica == undefined ||
      this.idenPredio.condicion_juridica == null ||
      this.idenPredio.condicion_juridica == ''
    ) {
      mensaje = `${mensaje}- El campo de condición jurídica de la pestaña de identificación del predio es obligatorio`;
    } else {
      this.controles.idenPredio.condicion_juridica = true;
    }
    if (
      this.idenPredio.tipo_oferta == undefined ||
      this.idenPredio.tipo_oferta == null ||
      this.idenPredio.tipo_oferta == ''
    ) {
      mensaje = `${mensaje}- El campo de tipo oferta de la pestaña de identificación del predio es obligatorio`;
    } else {
      this.controles.idenPredio.tipo_oferta = true;
    }
    if (
      this.idenPredio.tipo_predio == undefined ||
      this.idenPredio.tipo_predio == null ||
      this.idenPredio.tipo_predio == ''
    ) {
      mensaje = `${mensaje}- El campo de tipo predio de la pestaña de identificación del predio es obligatorio`;
    } else {
      this.controles.idenPredio.tipo_predio = true;
    }
    if (
      this.idenPredio.oferta_origen == undefined ||
      this.idenPredio.oferta_origen == null ||
      this.idenPredio.oferta_origen == ''
    ) {
      mensaje = `${mensaje}- El campo del origen de la oferta de la pestaña de identificación del predio es obligatorio`;
    } else {
      this.controles.idenPredio.oferta_origen = true;
    }
    if (
      this.locPre.departamento == undefined ||
      this.locPre.departamento == null ||
      this.locPre.departamento == ''
    ) {
      mensaje = `${mensaje}- El departamento donde se situa la oferta de la pestaña de localización del predio es obligatorio`;
    } else {
      this.controles.locPre.departamento = true;
    }
    if (
      this.locPre.municipio == undefined ||
      this.locPre.municipio == null ||
      this.locPre.municipio == ''
    ) {
      mensaje = `${mensaje}- El municipio donde se situa la oferta de la pestaña de localización del predio es obligatorio`;
    } else {
      this.controles.locPre.municipio = true;
    }
    if (
      this.locPre.latitud == undefined ||
      this.locPre.latitud == null ||
      Number.isNaN(this.locPre.latitud)
    ) {
      mensaje = `${mensaje}- La latitud donde se situa la oferta de la pestaña de localización del predio es obligatoria`;
    } else {
      this.controles.locPre.latitud = true;
    }
    if (
      this.locPre.longitud == undefined ||
      this.locPre.longitud == null ||
      Number.isNaN(this.locPre.longitud)
    ) {
      mensaje = `${mensaje}- La longitud donde se situa la oferta de la pestaña de localización del predio es obligatoria`;
    } else {
      this.controles.locPre.longitud = true;
    }
    if (
      this.datGen.fecha == undefined ||
      this.datGen.fecha == null ||
      this.datGen.fecha == ''
    ) {
      mensaje = `${mensaje}- La fecha de captura de la oferta de la pestaña de datos generales es obligatoria`;
    } else {
      this.controles.datGen.fecha = true;
    }
    if (
      this.datGen.tipo_inmueble == undefined ||
      this.datGen.tipo_inmueble == null ||
      this.datGen.tipo_inmueble == ''
    ) {
      mensaje = `${mensaje}- El tipo de inmueble de la oferta de la pestaña de datos generales es obligatoria`;
    } else {
      this.controles.datGen.tipo_inmueble = true;
    }
    if (
      this.datGen.derecho_tipo == undefined ||
      this.datGen.derecho_tipo == null ||
      this.datGen.derecho_tipo == ''
    ) {
      mensaje = `${mensaje}- El tipo de derecho de la oferta de la pestaña de datos generales es obligatorio`;
    } else {
      this.controles.datGen.derecho_tipo = true;
    }
    if (
      (this.datGen.si_valor_incluye_anexidades == undefined ||
        this.datGen.si_valor_incluye_anexidades == null ||
        this.datGen.si_valor_incluye_anexidades == '') &&
      this.datGen.tipo_inmueble === 'LOTE'
    ) {
      mensaje = `${mensaje}- La especificación de anexidades de la oferta de la pestaña de datos generales es obligatoria`;
    } else {
      this.controles.datGen.si_valor_incluye_anexidades = true;
    }
    if (
      (this.datGen.proyecto_inmobiliario == undefined ||
        this.datGen.proyecto_inmobiliario == null ||
        this.datGen.proyecto_inmobiliario == '') &&
      (this.idenPredio.condicion_juridica?.valueOf() === 'PH' ||
        this.idenPredio.condicion_juridica?.valueOf() === 'PH_MATRIZ' ||
        this.idenPredio.condicion_juridica?.valueOf() === 'PH_UNIDAD_PREDIAL' ||
        this.idenPredio.condicion_juridica?.valueOf() === 'CONDOMINIO' ||
        this.idenPredio.condicion_juridica?.valueOf() === 'CONDOMINIO_MATRIZ' ||
        this.idenPredio.condicion_juridica?.valueOf() ===
          'CONDOMINIO_UNIDAD_PREDIAL')
    ) {
      mensaje = `${mensaje}- La especificación del proyecto inmobiliario de la oferta de la pestaña de datos generales es obligatoria`;
    } else {
      this.controles.datGen.proyecto_inmobiliario = true;
    }
    if (
      (this.datGen.proyecto_descripcion == undefined ||
        this.datGen.proyecto_descripcion == null ||
        this.datGen.proyecto_descripcion == '') &&
      this.datGen.proyecto_inmobiliario === 'SI'
    ) {
      mensaje = `${mensaje}- Las observaciones del proyecto inmobiliario de la oferta de la pestaña de datos generales son obligatorias`;
    } else {
      this.controles.datGen.proyecto_descripcion = true;
    }
    if (
      Number(this.infoFis.area_terreno) <= 0 ||
      Number(this.infoFis.area_construccion) <= 0 ||
      Number(this.infoFis.area_privada) <= 0 ||
      Number(this.infoFis.area_cultivo) <= 0
    ) {
      mensaje = `${mensaje}- Las áreas deben de ser valores mayores de 0 en la pestaña de información física`;
    } else {
      this.controles.infoFis.area_terreno = true;
      this.controles.infoFis.area_construccion = true;
      this.controles.infoFis.area_privada = true;
      this.controles.infoFis.area_cultivo = true;
    }

    if (
      (this.infoFis.area_terreno == undefined ||
        this.infoFis.area_terreno == null ||
        Number.isNaN(this.infoFis.area_terreno)) &&
      (this.infoFis.area_construccion == undefined ||
        this.infoFis.area_construccion == null ||
        Number.isNaN(this.infoFis.area_construccion))
    ) {
      mensaje = `${mensaje}- Debe de tener al menos un valor asigando en el área de terreno o área de construcción en la pestaña de información física`;
    } else {
      this.controles.infoFis.area_terreno = true;
    }

    if (
      (this.infoFis.area_privada == undefined ||
        this.infoFis.area_privada == null ||
        Number.isNaN(this.infoFis.area_privada)) &&
      (this.infoFis.area_construccion == undefined ||
        this.infoFis.area_construccion == null ||
        Number.isNaN(this.infoFis.area_construccion))
    ) {
      mensaje = `${mensaje}- Debe de tener al menos un valor asigando en el área privada o área de construcción en la pestaña de información física`;
    } else {
      this.controles.infoFis.area_privada = true;
      this.controles.infoFis.area_construccion = true;
    }

    if (
      this.infoFis.destinacion_economica == undefined ||
      this.infoFis.destinacion_economica == null ||
      this.infoFis.destinacion_economica == ''
    ) {
      mensaje = `${mensaje}- La destinación económica en la pestaña de información física es obligatoria`;
    } else {
      this.controles.infoFis.destinacion_economica = true;
    }

    if (
      this.infoFis.servicios_publicos == undefined ||
      this.infoFis.servicios_publicos == null ||
      this.infoFis.servicios_publicos == ''
    ) {
      mensaje = `${mensaje}- Los servicios públicos en la pestaña de información física son obligatorios`;
    } else {
      this.controles.infoFis.servicios_publicos = true;
    }

    if (
      (this.infoFis.tipologia_tipo == undefined ||
        this.infoFis.tipologia_tipo == null ||
        this.infoFis.tipologia_tipo == '') &&
      this.idenPredio.tipo_predio == 'URBANO'
    ) {
      mensaje = `${mensaje}- La tipología del predio en la pestaña de información física es obligatoria`;
    } else {
      this.controles.infoFis.tipologia_tipo = true;
    }
    if (
      (this.infoEnono.valor_oferta_inicial == undefined ||
        this.infoEnono.valor_oferta_inicial == null ||
        Number.isNaN(this.infoEnono.valor_oferta_inicial)) &&
      (this.infoEnono.porcentaje_negociacion == undefined ||
        this.infoEnono.porcentaje_negociacion == null ||
        Number.isNaN(this.infoEnono.porcentaje_negociacion)) &&
      (this.infoEnono.valor_oferta_final == undefined ||
        this.infoEnono.valor_oferta_final == null ||
        Number.isNaN(this.infoEnono.valor_oferta_final)) &&
      this.idenPredio.tipo_oferta === 'VENTA'
    ) {
      mensaje = `${mensaje}- El valor de oferta inicial, final y el procentaje de negociación de la pestaña información económica son obligatorios`;
    } else {
      this.controles.infoEnono.valor_oferta_inicial = true;
      this.controles.infoEnono.porcentaje_negociacion = true;
      this.controles.infoEnono.valor_oferta_final = true;
    }
    if (
      (this.infoEnono.valor_terreno == undefined ||
        this.infoEnono.valor_terreno == null ||
        Number.isNaN(this.infoEnono.valor_terreno)) &&
      (this.infoEnono.valor_construccion_m2 == undefined ||
        this.infoEnono.valor_construccion_m2 == null ||
        Number.isNaN(this.infoEnono.valor_construccion_m2)) &&
      (this.infoEnono.valor_area_privada == undefined ||
        this.infoEnono.valor_area_privada == null ||
        Number.isNaN(this.infoEnono.valor_area_privada)) &&
      this.idenPredio.tipo_oferta === 'VENTA'
    ) {
      mensaje = `${mensaje}- Al menos un valor del terreno, construcción o área privada de la pestaña información económica es obligatorio`;
    } else {
      this.controles.infoEnono.valor_terreno = true;
      this.controles.infoEnono.valor_construccion_m2 = true;
      this.controles.infoEnono.valor_area_privada = true;
    }

    if (
      Number(this.infoEnono.valor_oferta_inicial) <= 0 ||
      Number(this.infoEnono.porcentaje_negociacion) <= 0 ||
      Number(this.infoEnono.valor_oferta_final) <= 0 ||
      Number(this.infoEnono.valor_terreno) <= 0 ||
      Number(this.infoEnono.valor_construccion_m2) <= 0 ||
      Number(this.infoEnono.valor_area_privada) <= 0
    ) {
      mensaje = `${mensaje}- Los valores económicos deben de ser positivos en la pestaña información económica`;
    } else {
      this.controles.infoEnono.valor_oferta_inicial = true;
      this.controles.infoEnono.porcentaje_negociacion = true;
      this.controles.infoEnono.valor_oferta_final = true;
      this.controles.infoEnono.valor_terreno = true;
      this.controles.infoEnono.valor_construccion_m2 = true;
      this.controles.infoEnono.valor_area_privada = true;
    }
    if (
      Number(this.infoEnono.valor_cultivo) <= 0 ||
      Number(this.infoEnono.avaluo_catastral) <= 0 ||
      Number(this.infoEnono.valor_administracion) <= 0 ||
      Number(this.infoEnono.valor_terraza_balcon_patio) <= 0 ||
      Number(this.infoEnono.valor_garajes) <= 0 ||
      Number(this.infoEnono.valor_depositos) <= 0 ||
      Number(this.infoEnono.valor_anexidades) <= 0
    ) {
      mensaje = `${mensaje}- Los valores económicos deben de ser positivos en la pestaña información económica`;
    } else {
      this.controles.infoEnono.valor_cultivo = true;
      this.controles.infoEnono.avaluo_catastral = true;
      this.controles.infoEnono.valor_administracion = true;
      this.controles.infoEnono.valor_terraza_balcon_patio = true;
      this.controles.infoEnono.valor_garajes = true;
      this.controles.infoEnono.valor_depositos = true;
      this.controles.infoEnono.valor_anexidades = true;
    }
    if (
      (this.infoEnono.valor_arriendo_inicial == undefined ||
        this.infoEnono.valor_arriendo_inicial == null ||
        Number.isNaN(this.infoEnono.valor_arriendo_inicial)) &&
      (this.infoEnono.valor_arriendo_final == undefined ||
        this.infoEnono.valor_arriendo_final == null ||
        Number.isNaN(this.infoEnono.valor_arriendo_final)) &&
      this.idenPredio.tipo_oferta === 'ARRIENDO'
    ) {
      mensaje = `${mensaje}- El valor del arriendo inciail y final de la pestaña información económica son obligatorios`;
    } else {
      this.controles.infoEnono.valor_arriendo_inicial = true;
      this.controles.infoEnono.valor_arriendo_final = true;
    }
    if (
      Number(this.infoEnono.valor_arriendo_inicial) <= 0 ||
      Number(this.infoEnono.valor_arriendo_final) <= 0
    ) {
      mensaje = `${mensaje}- Los valores económicos deben de ser positivos en la pestaña información económica`;
    } else {
      this.controles.infoEnono.valor_arriendo_inicial = true;
      this.controles.infoEnono.valor_arriendo_final = true;
    }
    if (
      this.infoFuente.nombre_oferente == undefined ||
      this.infoFuente.nombre_oferente == null ||
      this.infoFuente.nombre_oferente == ''
    ) {
      mensaje = `${mensaje}- El nombre del oferente en la pestaña de información fuente es obligatorio`;
    } else {
      this.controles.infoFuente.nombre_oferente = true;
    }
    if (
      (this.infoFuente.numero_contacto == undefined ||
        this.infoFuente.numero_contacto == null ||
        Number.isNaN(this.infoFuente.numero_contacto)) &&
      (this.infoFuente.url == undefined ||
        this.infoFuente.url == null ||
        this.infoFuente.url == '')
    ) {
      mensaje = `${mensaje}- El número de contacto o la URL de la oferta en la pestaña de información fuente es obligatorio`;
    } else {
      this.controles.infoFuente.numero_contacto = true;
      this.controles.infoFuente.url = true;
    }
    if (
      this.infoFuente.enlace_interno_foto_predio == undefined ||
      this.infoFuente.enlace_interno_foto_predio == null ||
      !this.infoFuente.enlace_interno_foto_predio
    ) {
      mensaje = `${mensaje}- El adjuntar una foto en la pestaña de información fuente es obligatorio`;
    } else {
      this.controles.infoFuente.enlace_interno_foto_predio = true;
    }
    if (
      this.infoFuente.observaciones == undefined ||
      this.infoFuente.observaciones == null ||
      this.infoFuente.observaciones == ''
    ) {
      mensaje = `${mensaje}- Las observaciones de la oferta en la pestaña de información fuente son obligatorias`;
    } else {
      this.controles.infoFuente.observaciones = true;
    }
    if (
      this.infoAdmin.ni_persona_captura == undefined ||
      this.infoAdmin.ni_persona_captura == null ||
      Number.isNaN(this.infoAdmin.ni_persona_captura)
    ) {
      mensaje = `${mensaje}- Revisar el login y los datos de la persona que está intentando relaizar el cargue de la oferta`;
    } else {
      this.controles.infoAdmin.ni_persona_captura = true;
    }
    if (
      this.infoAdmin.ti_persona_captura == undefined ||
      this.infoAdmin.ti_persona_captura == null ||
      Number.isNaN(this.infoAdmin.ti_persona_captura)
    ) {
      mensaje = `${mensaje}- Revisar el login y los datos de la persona que está intentando relaizar el cargue de la oferta`;
    } else {
      this.controles.infoAdmin.ti_persona_captura = true;
    }
    if (
      this.infoAdmin.email_persona_captura == undefined ||
      this.infoAdmin.email_persona_captura == null ||
      Number.isNaN(this.infoAdmin.email_persona_captura)
    ) {
      mensaje = `${mensaje}- Revisar el login y los datos de la persona que está intentando relaizar el cargue de la oferta`;
    } else {
      this.controles.infoAdmin.email_persona_captura = true;
    }
    if (
      this.infoAdmin.area_persona_captura == undefined ||
      this.infoAdmin.area_persona_captura == null ||
      Number.isNaN(this.infoAdmin.area_persona_captura)
    ) {
      mensaje = `${mensaje}- Revisar el login y los datos de la persona que está intentando relaizar el cargue de la oferta`;
    } else {
      this.controles.infoAdmin.area_persona_captura = true;
    }

    return mensaje;
  }

  controlesGeneralesVistasBolean() {
    let controlIdenPre = false,
      controlIdenLoca = false,
      controlDatGen = false,
      controlInfoFisi = false,
      controlInfoEconomic = false,
      controlInfoFuente = false,
      controlInfoAdmin = false,
      controlTotal = false;

    controlIdenPre =
      this.controles.idenPredio.codigo_homologado &&
      this.controles.idenPredio.condicion_juridica &&
      this.controles.idenPredio.estado_oferta &&
      this.controles.idenPredio.id_oferta &&
      this.controles.idenPredio.matricula &&
      this.controles.idenPredio.npa &&
      this.controles.idenPredio.npn &&
      this.controles.idenPredio.obs_verifica &&
      this.controles.idenPredio.oferta_origen &&
      this.controles.idenPredio.tipo_oferta &&
      this.controles.idenPredio.tipo_predio
        ? true
        : false;

    controlIdenLoca =
      this.controles.locPre.barrio &&
      this.controles.locPre.departamento &&
      this.controles.locPre.direccion &&
      this.controles.locPre.id_oferta &&
      this.controles.locPre.latitud &&
      this.controles.locPre.longitud &&
      this.controles.locPre.municipio &&
      this.controles.locPre.vereda
        ? true
        : false;

    controlDatGen =
      this.controles.datGen.derecho_tipo &&
      this.controles.datGen.fecha &&
      this.controles.datGen.id_oferta &&
      this.controles.datGen.proyecto_descripcion &&
      this.controles.datGen.proyecto_inmobiliario &&
      this.controles.datGen.si_valor_incluye_anexidades &&
      this.controles.datGen.tiempo_oferta_mercado &&
      this.controles.datGen.tipo_inmueble
        ? true
        : false;

    controlInfoFisi =
      this.controles.infoFis.altura_edificio &&
      this.controles.infoFis.ano_construccion &&
      this.controles.infoFis.area_construccion &&
      this.controles.infoFis.area_cultivo &&
      this.controles.infoFis.area_privada &&
      this.controles.infoFis.area_terreno &&
      this.controles.infoFis.coeficiente &&
      this.controles.infoFis.conservacion &&
      this.controles.infoFis.construcciones_anexas &&
      this.controles.infoFis.destinacion_economica &&
      this.controles.infoFis.edad_cultivo &&
      this.controles.infoFis.estrato &&
      this.controles.infoFis.garajes &&
      this.controles.infoFis.id_oferta &&
      this.controles.infoFis.numero_banos &&
      this.controles.infoFis.numero_depositos &&
      this.controles.infoFis.numero_habitaciones &&
      this.controles.infoFis.numero_piso &&
      this.controles.infoFis.servicios_publicos &&
      this.controles.infoFis.tipo_cultivo &&
      this.controles.infoFis.tipo_inmueble_rural &&
      this.controles.infoFis.tipologia_tipo
        ? true
        : false;

    controlInfoEconomic =
      this.controles.infoEnono.avaluo_catastral &&
      this.controles.infoEnono.id_oferta &&
      this.controles.infoEnono.porcentaje_negociacion &&
      this.controles.infoEnono.valor_administracion &&
      this.controles.infoEnono.valor_anexidades &&
      this.controles.infoEnono.valor_area_privada &&
      this.controles.infoEnono.valor_arriendo_final &&
      this.controles.infoEnono.valor_arriendo_inicial &&
      this.controles.infoEnono.valor_construccion_m2 &&
      this.controles.infoEnono.valor_cultivo &&
      this.controles.infoEnono.valor_depositos &&
      this.controles.infoEnono.valor_garajes &&
      this.controles.infoEnono.valor_oferta_final &&
      this.controles.infoEnono.valor_oferta_inicial &&
      this.controles.infoEnono.valor_terraza_balcon_patio &&
      this.controles.infoEnono.valor_terreno
        ? true
        : false;

    controlInfoFuente =
      this.controles.infoFuente.enlace_documentos &&
      this.controles.infoFuente.enlace_interno_foto_predio &&
      this.controles.infoFuente.id_oferta &&
      this.controles.infoFuente.nombre_oferente &&
      this.controles.infoFuente.numero_contacto &&
      this.controles.infoFuente.observaciones &&
      this.controles.infoFuente.url
        ? true
        : false;

    controlInfoAdmin =
      this.controles.infoAdmin.area_persona_captura &&
      this.controles.infoAdmin.area_persona_verifica &&
      this.controles.infoAdmin.email_persona_captura &&
      this.controles.infoAdmin.email_persona_verifica &&
      this.controles.infoAdmin.id_oferta &&
      this.controles.infoAdmin.ni_persona_captura &&
      this.controles.infoAdmin.ni_persona_verifica &&
      this.controles.infoAdmin.ti_persona_captura &&
      this.controles.infoAdmin.ti_persona_verifica
        ? true
        : false;

    controlTotal =
      controlIdenPre &&
      controlIdenLoca &&
      controlDatGen &&
      controlInfoFisi &&
      controlInfoEconomic &&
      controlInfoFuente &&
      controlInfoAdmin
        ? true
        : false;

    return controlTotal;
  }

  limpiarVariablesControles() {
    this.idenPredio.id_oferta = undefined;
    this.idenPredio.npn = undefined;
    this.idenPredio.npa = undefined;
    this.idenPredio.codigo_homologado = undefined;
    this.idenPredio.matricula = undefined;
    this.idenPredio.condicion_juridica = undefined;
    this.idenPredio.tipo_oferta = undefined;
    this.idenPredio.tipo_predio = undefined;
    this.idenPredio.oferta_origen = undefined;
    this.idenPredio.estado_oferta = 1;
    this.idenPredio.obs_verifica = 'Sin comentarios';

    this.locPre.id_oferta = this.idenPredio.id_oferta;
    this.locPre.departamento = undefined;
    this.locPre.municipio = undefined;
    this.locPre.barrio = undefined;
    this.locPre.vereda = undefined;
    this.locPre.latitud = undefined;
    this.locPre.longitud = undefined;
    this.locPre.direccion = undefined;

    this.locPreDir.id_oferta = this.idenPredio.id_oferta;
    this.locPreDir.dir01 = undefined;
    this.locPreDir.dir02 = undefined;
    this.locPreDir.dir03 = undefined;
    this.locPreDir.dir04 = undefined;
    this.locPreDir.dir05 = undefined;
    this.locPreDir.dir06 = undefined;
    this.locPreDir.dir07 = undefined;
    this.locPreDir.dir08 = undefined;
    this.locPreDir.dirParte1 = undefined;
    this.locPreDir.dirParte2 = undefined;
    this.locPreDir.dirParte3 = undefined;
    this.locPreDir.dirCompleta = undefined;
    this.locPreDir.dirrur = undefined;

    this.datGen.id_oferta = this.idenPredio.id_oferta;
    this.datGen.derecho_tipo = undefined;
    this.datGen.tipo_inmueble = undefined;
    this.datGen.si_valor_incluye_anexidades = undefined;
    this.datGen.fecha = undefined;
    this.datGen.tiempo_oferta_mercado = undefined;
    this.datGen.proyecto_inmobiliario = undefined;
    this.datGen.proyecto_descripcion = undefined;

    this.infoFis.id_oferta = this.idenPredio.id_oferta;
    this.infoFis.area_terreno = undefined;
    this.infoFis.area_construccion = undefined;
    this.infoFis.ano_construccion = undefined;
    this.infoFis.conservacion = undefined;
    this.infoFis.area_privada = undefined;
    this.infoFis.destinacion_economica = undefined;
    this.infoFis.altura_edificio = undefined;
    this.infoFis.numero_piso = undefined;
    this.infoFis.area_cultivo = undefined;
    this.infoFis.tipo_inmueble_rural = undefined;
    this.infoFis.tipologia_tipo = undefined;
    this.infoFis.edad_cultivo = undefined;
    this.infoFis.tipo_cultivo = undefined;
    this.infoFis.coeficiente = undefined;
    this.infoFis.servicios_publicos = undefined;
    this.infoFis.estrato = undefined;
    this.infoFis.garajes = undefined;
    this.infoFis.numero_banos = undefined;
    this.infoFis.numero_habitaciones = undefined;
    this.infoFis.numero_depositos = undefined;
    this.infoFis.construcciones_anexas = undefined;

    this.infoEnono.id_oferta = this.idenPredio.id_oferta;
    this.infoEnono.valor_oferta_inicial = undefined;
    this.infoEnono.porcentaje_negociacion = undefined;
    this.infoEnono.valor_oferta_final = undefined;
    this.infoEnono.valor_terreno = undefined;
    this.infoEnono.valor_construccion_m2 = undefined;
    this.infoEnono.valor_area_privada = undefined;
    this.infoEnono.valor_cultivo = undefined;
    this.infoEnono.avaluo_catastral = undefined;
    this.infoEnono.valor_administracion = undefined;
    this.infoEnono.valor_arriendo_inicial = undefined;
    this.infoEnono.valor_arriendo_final = undefined;
    this.infoEnono.valor_terraza_balcon_patio = undefined;
    this.infoEnono.valor_garajes = undefined;
    this.infoEnono.valor_depositos = undefined;
    this.infoEnono.valor_anexidades = undefined;

    this.infoFuente.id_oferta = this.idenPredio.id_oferta;
    this.infoFuente.nombre_oferente = undefined;
    this.infoFuente.numero_contacto = undefined;
    this.infoFuente.url = undefined;
    this.infoFuente.enlace_interno_foto_predio = undefined;
    this.infoFuente.enlace_documentos = undefined;
    this.infoFuente.observaciones = undefined;

    this.infoPerVeri.ti_persona = undefined;
    this.infoPerVeri.ni_persona = undefined;
    this.infoPerVeri.nombres = undefined;
    this.infoPerVeri.apellidos = undefined;
    this.infoPerVeri.email = undefined;
    this.infoPerVeri.telefono = undefined;
    this.infoPerVeri.area = undefined;
    this.infoPerVeri.rol = undefined;

    this.infoAdmin.id_oferta = this.idenPredio.id_oferta;
    this.infoAdmin.ti_persona_captura = undefined;
    this.infoAdmin.ni_persona_captura = undefined;
    this.infoAdmin.email_persona_captura = undefined;
    this.infoAdmin.area_persona_captura = undefined;
    this.infoAdmin.ti_persona_verifica = undefined;
    this.infoAdmin.ni_persona_verifica = undefined;
    this.infoAdmin.email_persona_verifica = undefined;
    this.infoAdmin.area_persona_verifica = undefined;

    this.vistasHabilitar.noVistaIdenPreOfer = true;
    this.vistasHabilitar.noVistaLocOfer = false;
    this.vistasHabilitar.noVistaDatGen = false;
    this.vistasHabilitar.noVistaInfoFisi = false;
    this.vistasHabilitar.noVistaInfoEnoco = false;
    this.vistasHabilitar.noVistaInfoFuen = false;
    this.vistasHabilitar.noEnvioTerminar = false;

    this.controles.idenPredio.id_oferta = false;
    this.controles.idenPredio.npn = true;
    this.controles.idenPredio.npa = true;
    this.controles.idenPredio.codigo_homologado = true;
    this.controles.idenPredio.matricula = true;
    this.controles.idenPredio.condicion_juridica = false;
    this.controles.idenPredio.tipo_oferta = false;
    this.controles.idenPredio.tipo_predio = false;
    this.controles.idenPredio.oferta_origen = false;
    this.controles.idenPredio.estado_oferta = true;
    this.controles.idenPredio.obs_verifica = true;

    this.controles.locPre.id_oferta = false;
    this.controles.locPre.departamento = false;
    this.controles.locPre.municipio = false;
    this.controles.locPre.barrio = true;
    this.controles.locPre.vereda = true;
    this.controles.locPre.latitud = false;
    this.controles.locPre.longitud = false;
    this.controles.locPre.direccion = true;

    this.controles.datGen.id_oferta = false;
    this.controles.datGen.derecho_tipo = false;
    this.controles.datGen.tipo_inmueble = false;
    this.controles.datGen.si_valor_incluye_anexidades = false;
    this.controles.datGen.fecha = false;
    this.controles.datGen.tiempo_oferta_mercado = true;
    this.controles.datGen.proyecto_inmobiliario = false;
    this.controles.datGen.proyecto_descripcion = false;

    this.controles.infoFis.id_oferta = false;
    this.controles.infoFis.area_terreno = false;
    this.controles.infoFis.area_construccion = false;
    this.controles.infoFis.ano_construccion = true;
    this.controles.infoFis.conservacion = true;
    this.controles.infoFis.area_privada = false;
    this.controles.infoFis.destinacion_economica = false;
    this.controles.infoFis.altura_edificio = true;
    this.controles.infoFis.numero_piso = true;
    this.controles.infoFis.area_cultivo = true;
    this.controles.infoFis.tipo_inmueble_rural = true;
    this.controles.infoFis.tipologia_tipo = false;
    this.controles.infoFis.edad_cultivo = true;
    this.controles.infoFis.tipo_cultivo = true;
    this.controles.infoFis.coeficiente = true;
    this.controles.infoFis.servicios_publicos = false;
    this.controles.infoFis.estrato = true;
    this.controles.infoFis.garajes = true;
    this.controles.infoFis.numero_banos = true;
    this.controles.infoFis.numero_habitaciones = true;
    this.controles.infoFis.numero_depositos = true;
    this.controles.infoFis.construcciones_anexas = true;

    this.controles.infoEnono.id_oferta = false;
    this.controles.infoEnono.valor_oferta_inicial = false;
    this.controles.infoEnono.porcentaje_negociacion = false;
    this.controles.infoEnono.valor_oferta_final = false;
    this.controles.infoEnono.valor_terreno = false;
    this.controles.infoEnono.valor_construccion_m2 = false;
    this.controles.infoEnono.valor_area_privada = false;
    this.controles.infoEnono.valor_cultivo = true;
    this.controles.infoEnono.avaluo_catastral = true;
    this.controles.infoEnono.valor_administracion = true;
    this.controles.infoEnono.valor_arriendo_inicial = false;
    this.controles.infoEnono.valor_arriendo_final = false;
    this.controles.infoEnono.valor_terraza_balcon_patio = true;
    this.controles.infoEnono.valor_garajes = true;
    this.controles.infoEnono.valor_depositos = true;
    this.controles.infoEnono.valor_anexidades = true;

    this.controles.infoFuente.id_oferta = false;
    this.controles.infoFuente.nombre_oferente = false;
    this.controles.infoFuente.numero_contacto = false;
    this.controles.infoFuente.url = false;
    this.controles.infoFuente.enlace_interno_foto_predio = true;
    this.controles.infoFuente.enlace_documentos = true;
    this.controles.infoFuente.observaciones = false;

    this.controles.infoAdmin.id_oferta = false;
    this.controles.infoAdmin.ti_persona_captura = false;
    this.controles.infoAdmin.ni_persona_captura = false;
    this.controles.infoAdmin.email_persona_captura = false;
    this.controles.infoAdmin.area_persona_captura = false;
    this.controles.infoAdmin.ti_persona_verifica = true;
    this.controles.infoAdmin.ni_persona_verifica = true;
    this.controles.infoAdmin.email_persona_verifica = true;
    this.controles.infoAdmin.area_persona_verifica = true;
  }
}
