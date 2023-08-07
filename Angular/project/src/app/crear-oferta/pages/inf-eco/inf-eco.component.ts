import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';

import { ApiService } from '../../../servicios/api/api.service';
import { ValrelacionesService } from '../../../servicios/valrelaciones/valrelaciones.service';

import { infoEconoI } from '../../../modelos/crear-oferta-inf-eco.interface';
import { resCearOfer } from '../../../modelos/res-crear-ofer.interface';
@Component({
  selector: 'app-inf-eco',
  templateUrl: './inf-eco.component.html',
  styleUrls: ['./inf-eco.component.css'],
})
export class InfEcoComponent {
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public valrelacionesService: ValrelacionesService
  ) {}

  get id_oferta() {
    return this.formUserEco.get('id_oferta') as FormControl;
  }

  get valofeini() {
    return this.formUserEco.get('valofeini') as FormControl;
  }

  get porneg() {
    return this.formUserEco.get('porneg') as FormControl;
  }

  get valofefin() {
    return this.formUserEco.get('valofefin') as FormControl;
  }

  get valterr() {
    return this.formUserEco.get('valterr') as FormControl;
  }

  get valcm2() {
    return this.formUserEco.get('valcm2') as FormControl;
  }

  get valap() {
    return this.formUserEco.get('valap') as FormControl;
  }

  get valcul() {
    return this.formUserEco.get('valcul') as FormControl;
  }

  get valavacat() {
    return this.formUserEco.get('valavacat') as FormControl;
  }

  get valadmin() {
    return this.formUserEco.get('valadmin') as FormControl;
  }

  get valarrini() {
    return this.formUserEco.get('valarrini') as FormControl;
  }

  get valarrfin() {
    return this.formUserEco.get('valarrfin') as FormControl;
  }

  get valtbp() {
    return this.formUserEco.get('valtbp') as FormControl;
  }

  get valgar() {
    return this.formUserEco.get('valgar') as FormControl;
  }

  get valdep() {
    return this.formUserEco.get('valdep') as FormControl;
  }

  get valanex() {
    return this.formUserEco.get('valanex') as FormControl;
  }

  formUserEco = this.fb.group(
    {
      id_oferta: [{ value: '123456789', disabled: true }, Validators.required],
      valofeini: [
        this.valrelacionesService.infoEnono.valor_oferta_final,
        [
          Validators.required,
          Validators.max(10000000000000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],
      porneg: [
        this.valrelacionesService.infoEnono.porcentaje_negociacion,
        [Validators.max(100), Validators.min(0)],
      ],
      valofefin: [
        this.valrelacionesService.infoEnono.valor_oferta_final,
        [
          Validators.max(10000000000000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],
      valterr: [
        this.valrelacionesService.infoEnono.valor_terreno,
        [
          Validators.max(10000000000000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],
      valcm2: [
        this.valrelacionesService.infoEnono.valor_construccion_m2,
        [
          Validators.max(10000000000000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],
      valap: [
        this.valrelacionesService.infoEnono.valor_area_privada,
        [
          Validators.max(10000000000000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],
      valcul: [
        this.valrelacionesService.infoEnono.valor_cultivo,
        [
          Validators.max(10000000000000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],
      valavacat: [
        this.valrelacionesService.infoEnono.avaluo_catastral,
        [
          Validators.max(10000000000000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],
      valadmin: [
        this.valrelacionesService.infoEnono.valor_administracion,
        [
          Validators.max(10000000000000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],
      valarrini: [
        this.valrelacionesService.infoEnono.valor_arriendo_inicial,
        [
          Validators.max(10000000000000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],
      valarrfin: [
        this.valrelacionesService.infoEnono.valor_arriendo_final,
        [
          Validators.max(10000000000000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],

      valtbp: [
        this.valrelacionesService.infoEnono.valor_terraza_balcon_patio,
        [
          Validators.max(10000000000000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],

      valgar: [
        this.valrelacionesService.infoEnono.valor_garajes,
        [
          Validators.max(10000000000000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],
      valdep: [
        this.valrelacionesService.infoEnono.valor_depositos,
        [
          Validators.max(10000000000000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],
      valanex: [
        this.valrelacionesService.infoEnono.valor_anexidades,
        [
          Validators.max(10000000000000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],
    },
    {
      validator: [
        (group: any) => {
          if (
            this.valrelacionesService.idenPredio.tipo_oferta?.valueOf() ===
            'VENTA'
          ) {
            return Validators.required(group.controls.valofeini);
          }
          return null;
        },
        (group: any) => {
          if (
            this.valrelacionesService.idenPredio.tipo_oferta?.valueOf() ===
            'VENTA'
          ) {
            return Validators.required(group.controls.porneg);
          }
          return null;
        },
        (group: any) => {
          if (
            this.valrelacionesService.idenPredio.tipo_oferta?.valueOf() ===
            'VENTA'
          ) {
            return Validators.required(group.controls.valofefin);
          }
          return null;
        },
        (group: any) => {
          if (
            (this.valrelacionesService.datGen.tipo_inmueble?.valueOf() ===
              'FINCA' ||
              this.valrelacionesService.datGen.tipo_inmueble?.valueOf() ===
                'LOTE') &&
            this.valrelacionesService.idenPredio.tipo_oferta?.valueOf() ===
              'VENTA'
          ) {
            return Validators.required(group.controls.valterr);
          }
          return null;
        },
        (group: any) => {
          if (
            this.valrelacionesService.datGen.tipo_inmueble?.valueOf() !==
              'LOTE' &&
            this.valrelacionesService.datGen.tipo_inmueble?.valueOf() !==
              'FINCA' &&
            this.valrelacionesService.idenPredio.tipo_oferta?.valueOf() ===
              'VENTA'
          ) {
            return Validators.required(group.controls.valcm2);
          }
          return null;
        },
        (group: any) => {
          if (
            this.valrelacionesService.idenPredio.tipo_oferta?.valueOf() ===
            'ARRIENDO'
          ) {
            return Validators.required(group.controls.valarrini);
          }
          return null;
        },
        (group: any) => {
          if (
            this.valrelacionesService.idenPredio.tipo_oferta?.valueOf() ===
            'ARRIENDO'
          ) {
            return Validators.required(group.controls.valarrfin);
          }
          return null;
        },
      ],
    }
  );

  objDatEcono: infoEconoI = {
    id_oferta: undefined,
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

  resDatEcono: resCearOfer = {
    id_oferta: null,
    status: null,
  };

  envioFormVistaBack: boolean = false;
  noVistaSiguienteBoton: boolean = true;

  controlEntrevariables = {
    valControlTipoOfertaVenta:
      this.valrelacionesService.idenPredio.tipo_oferta === 'VENTA'
        ? true
        : false,
    valControlTipoOfertaArriendo:
      this.valrelacionesService.idenPredio.tipo_oferta === 'ARRIENDO'
        ? true
        : false,
    valControlTipoPredioPH:
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
    valControlTipoPredioLote:
      this.valrelacionesService.datGen.tipo_inmueble?.valueOf() === 'LOTE'
        ? true
        : false,
    valControlTipoPredioFincaLote:
      this.valrelacionesService.datGen.tipo_inmueble?.valueOf() === 'FINCA' ||
      this.valrelacionesService.datGen.tipo_inmueble?.valueOf() === 'LOTE'
        ? true
        : false,
  };

  procesar() {
    this.objDatEcono.id_oferta =
      this.valrelacionesService.idenPredio.id_oferta?.valueOf();
    this.objDatEcono.valor_oferta_inicial = this.controlEntrevariables
      .valControlTipoOfertaVenta
      ? Number(this.formUserEco.value.valofeini?.valueOf())
      : undefined;
    this.objDatEcono.porcentaje_negociacion = this.controlEntrevariables
      .valControlTipoOfertaVenta
      ? Number(this.formUserEco.value.porneg?.valueOf())
      : undefined;
    this.objDatEcono.valor_oferta_final = this.controlEntrevariables
      .valControlTipoOfertaVenta
      ? Number(this.formUserEco.value.valofefin?.valueOf())
      : undefined;
    this.objDatEcono.valor_terreno =
      this.controlEntrevariables.valControlTipoOfertaVenta &&
      this.controlEntrevariables.valControlTipoPredioFincaLote
        ? Number(this.formUserEco.value.valterr?.valueOf())
        : undefined;
    this.objDatEcono.valor_construccion_m2 =
      !this.controlEntrevariables.valControlTipoPredioLote &&
      this.controlEntrevariables.valControlTipoOfertaVenta
        ? Number(this.formUserEco.value.valcm2?.valueOf())
        : undefined;
    this.objDatEcono.valor_area_privada =
      !this.controlEntrevariables.valControlTipoPredioLote &&
      this.controlEntrevariables.valControlTipoOfertaVenta
        ? Number(this.formUserEco.value.valap?.valueOf())
        : undefined;
    this.objDatEcono.valor_cultivo = this.controlEntrevariables
      .valControlTipoPredioFincaLote
      ? Number(this.formUserEco.value.valcul?.valueOf())
      : undefined;
    this.objDatEcono.avaluo_catastral = Number(
      this.formUserEco.value.valavacat?.valueOf()
    );
    this.objDatEcono.valor_administracion = this.controlEntrevariables
      .valControlTipoPredioPH
      ? Number(this.formUserEco.value.valadmin?.valueOf())
      : undefined;
    this.objDatEcono.valor_arriendo_inicial = this.controlEntrevariables
      .valControlTipoOfertaArriendo
      ? Number(this.formUserEco.value.valarrini?.valueOf())
      : undefined;
    this.objDatEcono.valor_arriendo_final = this.controlEntrevariables
      .valControlTipoOfertaArriendo
      ? Number(this.formUserEco.value.valarrfin?.valueOf())
      : undefined;
    this.objDatEcono.valor_terraza_balcon_patio =
      this.controlEntrevariables.valControlTipoOfertaVenta &&
      this.controlEntrevariables.valControlTipoPredioPH
        ? Number(this.formUserEco.value.valtbp?.valueOf())
        : undefined;
    this.objDatEcono.valor_garajes = this.controlEntrevariables
      .valControlTipoOfertaVenta
      ? Number(this.formUserEco.value.valgar?.valueOf())
      : undefined;
    this.objDatEcono.valor_depositos = this.controlEntrevariables
      .valControlTipoOfertaVenta
      ? Number(this.formUserEco.value.valdep?.valueOf())
      : undefined;
    this.objDatEcono.valor_anexidades = this.controlEntrevariables
      .valControlTipoOfertaVenta
      ? Number(this.formUserEco.value.valanex?.valueOf())
      : undefined;

    if (
      this.valrelacionesService.idenPredio.id_oferta !== undefined &&
      JSON.stringify(this.valrelacionesService.infoFis) !==
        JSON.stringify(this.objDatEcono)
    ) {
      this.api
        .capOferRestInfoEconoOferta(this.objDatEcono)
        .subscribe((resDatEcono) => {
          if (resDatEcono.status === '200 OK') {
            this.valrelacionesService.setInfoEconoPredio = this.objDatEcono;
            console.log(this.valrelacionesService.infoEnono);
            this.envioFormVistaBack = true;
            this.noVistaSiguienteBoton =
              this.valrelacionesService.idenPredio.id_oferta !== undefined &&
              this.envioFormVistaBack
                ? false
                : true;
            this.valrelacionesService.habilitarVista(
              'noVistaInfoFuen',
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

    console.log(this.formUserEco.value);
    console.log(this.valrelacionesService.infoEnono);
  }
}
