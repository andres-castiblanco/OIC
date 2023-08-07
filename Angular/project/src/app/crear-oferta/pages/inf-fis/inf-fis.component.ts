import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';

import { ApiService } from '../../../servicios/api/api.service';
import { ValrelacionesService } from '../../../servicios/valrelaciones/valrelaciones.service';

import { infoFisiI } from '../../../modelos/crear-oferta-inf-fis.interface';
import { resCearOfer } from '../../../modelos/res-crear-ofer.interface';

@Component({
  selector: 'app-inf-fis',
  templateUrl: './inf-fis.component.html',
  styleUrls: ['./inf-fis.component.css'],
})
export class InfFisComponent {
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public valrelacionesService: ValrelacionesService
  ) {}

  get idoferta() {
    return this.formUserFis.get('idoferta') as FormControl;
  }

  get atm2() {
    return this.formUserFis.get('atm2') as FormControl;
  }

  get atha() {
    return this.formUserFis.get('atha') as FormControl;
  }

  get acm2() {
    return this.formUserFis.get('acm2') as FormControl;
  }

  get apm2() {
    return this.formUserFis.get('apm2') as FormControl;
  }

  get apha() {
    return this.formUserFis.get('apha') as FormControl;
  }

  get ac() {
    return this.formUserFis.get('ac') as FormControl;
  }

  get conser() {
    return this.formUserFis.get('conser') as FormControl;
  }

  get desecon() {
    return this.formUserFis.get('desecon') as FormControl;
  }

  get altedif() {
    return this.formUserFis.get('altedif') as FormControl;
  }

  get numpis() {
    return this.formUserFis.get('numpis') as FormControl;
  }

  get tir() {
    return this.formUserFis.get('tir') as FormControl;
  }

  get tiptipo() {
    return this.formUserFis.get('tiptipo') as FormControl;
  }

  get edcul() {
    return this.formUserFis.get('edcul') as FormControl;
  }

  get tipcul() {
    return this.formUserFis.get('tipcul') as FormControl;
  }

  get coef() {
    return this.formUserFis.get('coef') as FormControl;
  }

  get serpubl() {
    return this.formUserFis.get('serpubl') as FormControl;
  }

  get estra() {
    return this.formUserFis.get('estra') as FormControl;
  }

  get garaje() {
    return this.formUserFis.get('garaje') as FormControl;
  }

  get banos() {
    return this.formUserFis.get('banos') as FormControl;
  }

  get numhabi() {
    return this.formUserFis.get('numhabi') as FormControl;
  }

  get numdep() {
    return this.formUserFis.get('numdep') as FormControl;
  }

  get conanex() {
    return this.formUserFis.get('conanex') as FormControl;
  }

  static areasValidaciones(control: AbstractControl) {
    const areaTerrenom2: string = control.get('atm2')?.value;
    const areaTerrenoha: string = control.get('atha')?.value;
    const areaConstruccionm2: string = control.get('acm2')?.value;
    const areaPrivadanm2: string = control.get('apm2')?.value;
    if (
      (areaTerrenom2 === undefined || areaTerrenom2 === null) &&
      (areaTerrenoha === undefined || areaTerrenoha === null) &&
      (areaConstruccionm2 === undefined || areaConstruccionm2 === null) &&
      (areaPrivadanm2 === undefined || areaPrivadanm2 === null)
    ) {
      control.get('atm2')?.setErrors({ areasVacias: true });
      control.get('atha')?.setErrors({ areasVacias: true });
      control.get('acm2')?.setErrors({ areasVacias: true });
      control.get('apm2')?.setErrors({ areasVacias: true });
    } else {
      control.get('atm2')?.setErrors(null);
      control.get('atha')?.setErrors(null);
      control.get('acm2')?.setErrors(null);
      control.get('apm2')?.setErrors(null);
    }
  }

  formUserFis = this.fb.group(
    {
      idoferta: [
        {
          value: this.valrelacionesService.idenPredio.id_oferta,
          disabled: true,
        },
        Validators.required,
      ],
      atm2: [
        this.valrelacionesService.infoFis.area_terreno,
        [
          Validators.max(1000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],
      atha: [
        this.valrelacionesService.infoFis.area_terreno,
        [
          Validators.max(1000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],
      acm2: [
        this.valrelacionesService.infoFis.area_construccion,
        [Validators.max(1000000), Validators.min(0)],
      ],
      apm2: [
        this.valrelacionesService.infoFis.area_privada,
        [Validators.max(1000000), Validators.min(0)],
      ],
      apha: [
        this.valrelacionesService.infoFis.area_cultivo,
        [Validators.max(1000000), Validators.min(0)],
      ],
      ac: [
        this.valrelacionesService.infoFis.ano_construccion,
        [Validators.max(2100), Validators.min(1400)],
      ],
      conser: [this.valrelacionesService.infoFis.conservacion],
      desecon: [
        this.valrelacionesService.infoFis.destinacion_economica,
        Validators.required,
      ],
      altedif: [this.valrelacionesService.infoFis.altura_edificio],
      numpis: [
        this.valrelacionesService.infoFis.numero_piso,
        [Validators.max(1000), Validators.min(1)],
      ],
      tir: [this.valrelacionesService.infoFis.tipo_inmueble_rural],
      tiptipo: [this.valrelacionesService.infoFis.tipologia_tipo],
      edcul: [
        this.valrelacionesService.infoFis.edad_cultivo,
        [Validators.max(1000), Validators.min(1)],
      ],
      tipcul: [this.valrelacionesService.infoFis.tipo_cultivo],
      coef: [
        this.valrelacionesService.infoFis.coeficiente,
        [Validators.max(1000), Validators.min(1)],
      ],
      serpubl: [
        this.valrelacionesService.infoFis.servicios_publicos,
        Validators.required,
      ],
      estra: [
        this.valrelacionesService.infoFis.estrato,
        [Validators.max(6), Validators.min(1)],
      ],
      garaje: [
        this.valrelacionesService.infoFis.garajes,
        [Validators.max(50), Validators.min(1)],
      ],
      banos: [
        this.valrelacionesService.infoFis.numero_banos,
        [Validators.max(50), Validators.min(1)],
      ],
      numhabi: [
        this.valrelacionesService.infoFis.numero_habitaciones,
        [Validators.max(50), Validators.min(1)],
      ],
      numdep: [
        this.valrelacionesService.infoFis.numero_depositos,
        [Validators.max(50), Validators.min(1)],
      ],
      conanex: [
        this.valrelacionesService.infoFis.construcciones_anexas,
        [Validators.maxLength(100)],
      ],
    },
    {
      validator: [
        (group: any) => {
          if (
            this.valrelacionesService.idenPredio.tipo_predio?.valueOf() ===
              'URBANO' ||
            this.valrelacionesService.idenPredio.tipo_predio?.valueOf() ===
              'CORREGIMIENTO_Y_CASERIOS'
          ) {
            return Validators.required(group.controls.tiptipo);
          }
          return null;
        },
        InfFisComponent.areasValidaciones,
      ],
    }
  );

  objDatFis: infoFisiI = {
    id_oferta: undefined,
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

  resDatFis: resCearOfer = {
    id_oferta: null,
    status: null,
  };

  envioFormVistaBack: boolean = false;
  noVistaSiguienteBoton: boolean = true;

  controlEntrevariables = {
    val_area_terreno:
      this.valrelacionesService.datGen.tipo_inmueble?.valueOf() === 'FINCA' ||
      this.valrelacionesService.datGen.tipo_inmueble?.valueOf() === 'LOTE' ||
      this.valrelacionesService.datGen.tipo_inmueble?.valueOf() === 'CASA' ||
      this.valrelacionesService.datGen.tipo_inmueble?.valueOf() ===
        'CASA_CAMPESTRE' ||
      this.valrelacionesService.datGen.tipo_inmueble?.valueOf() ===
        'CASA_LOTE' ||
      this.valrelacionesService.datGen.tipo_inmueble?.valueOf() === 'BODEGA' ||
      this.valrelacionesService.datGen.tipo_inmueble?.valueOf() === 'CABAÑA' ||
      this.valrelacionesService.datGen.tipo_inmueble?.valueOf() === 'OTRO'
        ? true
        : false,
    val_n_lote:
      this.valrelacionesService.datGen.tipo_inmueble?.valueOf() === 'LOTE'
        ? false
        : true,
    val_area_privada:
      this.valrelacionesService.idenPredio.condicion_juridica?.valueOf() ===
        'PH' ||
      this.valrelacionesService.idenPredio.condicion_juridica?.valueOf() ===
        'PH_MATRIZ' ||
      this.valrelacionesService.idenPredio.condicion_juridica?.valueOf() ===
        'PH_UNIDAD_PREDIAL' ||
      this.valrelacionesService.idenPredio.condicion_juridica?.valueOf() ===
        'CONDOMINIO' ||
      this.valrelacionesService.idenPredio.condicion_juridica?.valueOf() ===
        'CONDOMINIO_MATRIZ' ||
      this.valrelacionesService.idenPredio.condicion_juridica?.valueOf() ===
        'CONDOMINIO_UNIDAD_PREDIAL'
        ? true
        : false,
    val_tipo_rural:
      this.valrelacionesService.idenPredio.tipo_predio?.valueOf() === 'RURAL'
        ? true
        : false,
    val_n_lote_finca:
      this.valrelacionesService.datGen.tipo_inmueble?.valueOf() === 'FINCA' ||
      this.valrelacionesService.datGen.tipo_inmueble?.valueOf() === 'LOTE'
        ? true
        : false,
  };

  procesar() {
    this.objDatFis.id_oferta =
      this.valrelacionesService.idenPredio.id_oferta?.valueOf();
    this.objDatFis.area_terreno =
      this.valrelacionesService.idenPredio.tipo_predio === 'RURAL'
        ? Number(this.formUserFis.value.atha?.valueOf())
        : Number(this.formUserFis.value.atm2?.valueOf());

    this.objDatFis.area_construccion = Number(
      this.formUserFis.value.acm2?.valueOf()
    );

    this.objDatFis.ano_construccion = Number(
      this.formUserFis.value.ac?.valueOf()
    );
    this.objDatFis.conservacion = this.formUserFis.value.conser?.valueOf();
    this.objDatFis.area_privada = Number(
      this.formUserFis.value.apm2?.valueOf()
    );
    this.objDatFis.destinacion_economica =
      this.formUserFis.value.desecon?.valueOf();
    this.objDatFis.altura_edificio = this.formUserFis.value.altedif?.valueOf();
    this.objDatFis.numero_piso = Number(
      this.formUserFis.value.numpis?.valueOf()
    );
    this.objDatFis.area_cultivo = Number(
      this.formUserFis.value.apha?.valueOf()
    );
    this.objDatFis.tipo_inmueble_rural = this.formUserFis.value.tir?.valueOf();
    this.objDatFis.tipologia_tipo = this.formUserFis.value.tiptipo?.valueOf();
    this.objDatFis.edad_cultivo = Number(
      this.formUserFis.value.edcul?.valueOf()
    );
    this.objDatFis.tipo_cultivo = this.formUserFis.value.tipcul?.valueOf();
    this.objDatFis.coeficiente = Number(this.formUserFis.value.coef?.valueOf());
    this.objDatFis.servicios_publicos =
      this.formUserFis.value.serpubl?.valueOf();
    this.objDatFis.estrato = Number(this.formUserFis.value.estra?.valueOf());
    this.objDatFis.garajes = Number(this.formUserFis.value.garaje?.valueOf());
    this.objDatFis.numero_banos = Number(
      this.formUserFis.value.banos?.valueOf()
    );
    this.objDatFis.numero_habitaciones = Number(
      this.formUserFis.value.numhabi?.valueOf()
    );
    this.objDatFis.numero_depositos = Number(
      this.formUserFis.value.numdep?.valueOf()
    );
    this.objDatFis.construcciones_anexas =
      this.formUserFis.value.conanex?.valueOf();

    if (
      this.valrelacionesService.idenPredio.id_oferta !== undefined &&
      JSON.stringify(this.valrelacionesService.infoFis) !==
        JSON.stringify(this.objDatFis)
    ) {
      this.api
        .capOferRestInfoFisOferta(this.objDatFis)
        .subscribe((resDatFis) => {
          if (resDatFis.status === '200 OK') {
            this.valrelacionesService.setInfoFisPredio = this.objDatFis;
            // console.log(this.valrelacionesService.infoFis);
            this.envioFormVistaBack = true;
            this.noVistaSiguienteBoton =
              this.valrelacionesService.idenPredio.id_oferta !== undefined &&
              this.envioFormVistaBack
                ? false
                : true;
            this.valrelacionesService.habilitarVista(
              'noVistaInfoEnoco',
              this.noVistaSiguienteBoton
            );
            console.warn(
              `El valor de id_oferta  se inicializó y fue asignado su valor es de: ${this.valrelacionesService.idenPredio.id_oferta}. Se evidencia actualizaciones por lo tanto se actualizan los datos.`
            );
          } else {
            console.warn(
              `Error no status '200 OK' para la oferta: ${this.valrelacionesService.idenPredio.id_oferta}. No se actualizan los datos.`
            );
          }
        });
    } else {
      console.warn(
        `El valor de id_oferta ya fue asignado su valor es de: ${this.valrelacionesService.idenPredio.id_oferta}. No se evidencia actualizaciones en el formulario.`
      );
    }

    // console.log(this.formUserFis.value);
    // console.log(this.valrelacionesService.infoFis);
  }
}
