import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';

import { ApiService } from '../../../servicios/api/api.service';
import { EditarService } from '../../../servicios/editar/editar.service';

import { infoEconoI } from '../../../modelos/crear-oferta-inf-eco.interface';
import { resCearOfer } from '../../../modelos/res-crear-ofer.interface';

import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from '../../components/dialogs/dialogs.component';

@Component({
  selector: 'app-inf-eco-edit',
  templateUrl: './inf-eco-edit.component.html',
  styleUrls: ['./inf-eco-edit.component.css'],
})
export class InfEcoEditComponent {
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public editar: EditarService,
    public dialog: MatDialog
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

  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null!;
      }
      const valid = regex.test(control.value);
      return valid ? null! : error;
    };
  }

  static valoresAreasValidaciones(control: AbstractControl) {
    const valorAreaTerreno: number = control.get('valterr')?.value;
    const valorAreaConstruccion: number = control.get('valcm2')?.value;
    const valorAreaPrivada: number = control.get('valap')?.value;
    const valorArriendoIni: number = control.get('valarrini')?.value;
    const valorArriendoFin: number = control.get('valarrfin')?.value;

    if (
      (valorAreaTerreno === undefined ||
        valorAreaTerreno === null ||
        Number.isNaN(valorAreaTerreno) ||
        valorAreaTerreno <= 0 ||
        valorAreaTerreno > 10000000000000000) &&
      (valorAreaConstruccion === undefined ||
        valorAreaConstruccion === null ||
        Number.isNaN(valorAreaConstruccion) ||
        valorAreaConstruccion <= 0 ||
        valorAreaConstruccion > 10000000000000000) &&
      (valorAreaPrivada === undefined ||
        valorAreaPrivada === null ||
        Number.isNaN(valorAreaPrivada) ||
        valorAreaPrivada <= 0 ||
        valorAreaPrivada > 10000000000000000) &&
      (valorArriendoIni === undefined ||
        valorArriendoIni === null ||
        Number.isNaN(valorArriendoIni)) &&
      (valorArriendoFin === undefined ||
        valorArriendoFin === null ||
        Number.isNaN(valorArriendoFin))
    ) {
      control.get('valterr')?.setErrors({ valoresAreasVacias: true });
      control.get('valcm2')?.setErrors({ valoresAreasVacias: true });
      control.get('valap')?.setErrors({ valoresAreasVacias: true });
    } else {
      control.get('valterr')?.setErrors(null);
      control.get('valcm2')?.setErrors(null);
      control.get('valap')?.setErrors(null);
    }
  }

  formUserEco = this.fb.group(
    {
      id_oferta: [
        {
          value: this.editar.idenPredio.id_oferta,
          disabled: true,
        },
        Validators.required,
      ],
      valofeini: [
        this.editar.infoEnono.valor_oferta_final,
        [
          Validators.max(10000000000000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],
      porneg: [
        this.editar.infoEnono.porcentaje_negociacion,
        [Validators.max(100), Validators.min(0)],
      ],
      valofefin: [
        this.editar.infoEnono.valor_oferta_final,
        [
          Validators.max(10000000000000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],
      valterr: [this.editar.infoEnono.valor_terreno, []],
      valcm2: [this.editar.infoEnono.valor_construccion_m2, []],
      valap: [this.editar.infoEnono.valor_area_privada, []],
      valcul: [
        this.editar.infoEnono.valor_cultivo,
        [
          Validators.maxLength(20),
          InfEcoEditComponent.patternValidator(
            /^(?!(^0+(?:\.0+)?$))(^\d+(?:\.\d+)?$)/,
            {
              hasNumber: true,
            }
          ),
        ],
      ],
      valavacat: [
        this.editar.infoEnono.avaluo_catastral,
        [
          Validators.maxLength(20),
          InfEcoEditComponent.patternValidator(
            /^(?!(^0+(?:\.0+)?$))(^\d+(?:\.\d+)?$)/,
            {
              hasNumber: true,
            }
          ),
        ],
      ],
      valadmin: [
        this.editar.infoEnono.valor_administracion,
        [
          Validators.maxLength(20),
          InfEcoEditComponent.patternValidator(
            /^(?!(^0+(?:\.0+)?$))(^\d+(?:\.\d+)?$)/,
            {
              hasNumber: true,
            }
          ),
        ],
      ],
      valarrini: [
        this.editar.infoEnono.valor_arriendo_inicial,
        [
          Validators.max(10000000000000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],
      valarrfin: [
        this.editar.infoEnono.valor_arriendo_final,
        [
          Validators.max(10000000000000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],

      valtbp: [
        this.editar.infoEnono.valor_terraza_balcon_patio,
        [
          Validators.maxLength(20),
          InfEcoEditComponent.patternValidator(
            /^(?!(^0+(?:\.0+)?$))(^\d+(?:\.\d+)?$)/,
            {
              hasNumber: true,
            }
          ),
        ],
      ],

      valgar: [
        this.editar.infoEnono.valor_garajes,
        [
          Validators.maxLength(20),
          InfEcoEditComponent.patternValidator(
            /^(?!(^0+(?:\.0+)?$))(^\d+(?:\.\d+)?$)/,
            {
              hasNumber: true,
            }
          ),
        ],
      ],
      valdep: [
        this.editar.infoEnono.valor_depositos,
        [
          Validators.maxLength(20),
          InfEcoEditComponent.patternValidator(
            /^(?!(^0+(?:\.0+)?$))(^\d+(?:\.\d+)?$)/,
            {
              hasNumber: true,
            }
          ),
        ],
      ],
      valanex: [
        this.editar.infoEnono.valor_anexidades,
        [
          Validators.maxLength(20),
          InfEcoEditComponent.patternValidator(
            /^(?!(^0+(?:\.0+)?$))(^\d+(?:\.\d+)?$)/,
            {
              hasNumber: true,
            }
          ),
        ],
      ],
    },
    {
      validator: [
        (group: any) => {
          if (this.editar.idenPredio.tipo_oferta?.valueOf() === 'VENTA') {
            return Validators.required(group.controls.valofeini);
          }
          return null;
        },
        (group: any) => {
          if (this.editar.idenPredio.tipo_oferta?.valueOf() === 'VENTA') {
            return Validators.required(group.controls.porneg);
          }
          return null;
        },
        (group: any) => {
          if (this.editar.idenPredio.tipo_oferta?.valueOf() === 'VENTA') {
            return Validators.required(group.controls.valofefin);
          }
          return null;
        },
        (group: any) => {
          if (this.editar.idenPredio.tipo_oferta?.valueOf() === 'ARRIENDO') {
            return Validators.required(group.controls.valarrini);
          }
          return null;
        },
        (group: any) => {
          if (this.editar.idenPredio.tipo_oferta?.valueOf() === 'ARRIENDO') {
            return Validators.required(group.controls.valarrfin);
          }
          return null;
        },
        InfEcoEditComponent.valoresAreasValidaciones,
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
    token: String(localStorage.getItem('token')),
  };

  envioFormVistaBack: boolean = false;
  noVistaSiguienteBoton: boolean = true;

  controlEntrevariables = {
    valControlTipoOfertaVenta:
      this.editar.idenPredio.tipo_oferta === 'VENTA' ? true : false,
    valControlTipoOfertaArriendo:
      this.editar.idenPredio.tipo_oferta === 'ARRIENDO' ? true : false,
    valControlTipoPredioPH:
      this.editar.idenPredio.condicion_juridica?.valueOf() === 'PH' ||
      this.editar.idenPredio.condicion_juridica?.valueOf() === 'PH_MATRIZ' ||
      this.editar.idenPredio.condicion_juridica?.valueOf() ===
        'PH_UNIDAD_PREDIAL' ||
      this.editar.idenPredio.condicion_juridica?.valueOf() === 'CONDOMINIO' ||
      this.editar.idenPredio.condicion_juridica?.valueOf() ===
        'CONDOMINIO_MATRIZ' ||
      this.editar.idenPredio.condicion_juridica?.valueOf() ===
        'CONDOMINIO_UNIDAD_PREDIAL'
        ? true
        : false,
    valControlTipoPredioLote:
      this.editar.datGen.tipo_inmueble?.valueOf() === 'LOTE' ? true : false,
    valControlTipoPredioFincaLote:
      this.editar.datGen.tipo_inmueble?.valueOf() === 'FINCA' ||
      this.editar.datGen.tipo_inmueble?.valueOf() === 'LOTE'
        ? true
        : false,
  };

  controlCamposInfoEco = {
    validaValoresPosi: {
      control: true,
      funcionControl: (objDatEcono: infoEconoI) => {
        if (
          objDatEcono.porcentaje_negociacion?.valueOf()! < 0 ||
          objDatEcono.avaluo_catastral?.valueOf()! < 0 ||
          objDatEcono.valor_administracion?.valueOf()! < 0 ||
          objDatEcono.valor_anexidades?.valueOf()! < 0 ||
          objDatEcono.valor_area_privada?.valueOf()! < 0 ||
          objDatEcono.valor_arriendo_final?.valueOf()! < 0 ||
          objDatEcono.valor_arriendo_inicial?.valueOf()! < 0 ||
          objDatEcono.valor_construccion_m2?.valueOf()! < 0 ||
          objDatEcono.valor_cultivo?.valueOf()! < 0 ||
          objDatEcono.valor_depositos?.valueOf()! < 0 ||
          objDatEcono.valor_garajes?.valueOf()! < 0 ||
          objDatEcono.valor_oferta_final?.valueOf()! < 0 ||
          objDatEcono.valor_oferta_inicial?.valueOf()! < 0 ||
          objDatEcono.valor_terraza_balcon_patio?.valueOf()! < 0 ||
          objDatEcono.valor_terreno?.valueOf()! < 0
        ) {
          return true;
        } else {
          return false;
        }
      },
      mensaje:
        'Error, se está digitando un valor negativo en los valores. Por esto, no se realiza el envío de la información. Por favor revisar.',
    },
    validaValoresDifCero: {
      control: true,
      funcionControl: (objDatEcono: infoEconoI) => {
        if (
          objDatEcono.avaluo_catastral?.valueOf()! == 0 ||
          objDatEcono.valor_administracion?.valueOf()! == 0 ||
          objDatEcono.valor_anexidades?.valueOf()! == 0 ||
          objDatEcono.valor_area_privada?.valueOf()! == 0 ||
          objDatEcono.valor_arriendo_final?.valueOf()! == 0 ||
          objDatEcono.valor_arriendo_inicial?.valueOf()! == 0 ||
          objDatEcono.valor_construccion_m2?.valueOf()! == 0 ||
          objDatEcono.valor_cultivo?.valueOf()! == 0 ||
          objDatEcono.valor_depositos?.valueOf()! == 0 ||
          objDatEcono.valor_garajes?.valueOf()! == 0 ||
          objDatEcono.valor_oferta_final?.valueOf()! == 0 ||
          objDatEcono.valor_oferta_inicial?.valueOf()! == 0 ||
          objDatEcono.valor_terraza_balcon_patio?.valueOf()! == 0 ||
          objDatEcono.valor_terreno?.valueOf()! == 0
        ) {
          return true;
        } else {
          return false;
        }
      },
      mensaje:
        'Error, se está digitando un valor igual a cero en los valores. Por esto, no se realiza el envío de la información. Por favor revisar.',
    },
  };

  controlGeneralCamposInfoEco: Boolean = false;

  validarCamposInfoEco(objDatEcono: infoEconoI) {
    this.controlCamposInfoEco.validaValoresPosi.control =
      this.controlCamposInfoEco.validaValoresPosi.funcionControl(objDatEcono);
    this.controlCamposInfoEco.validaValoresDifCero.control =
      this.controlCamposInfoEco.validaValoresDifCero.funcionControl(
        objDatEcono
      );
    if (this.controlCamposInfoEco.validaValoresPosi.control) {
      const dialogRef = this.dialog.open(DialogsComponent, {
        width: '350px',
        data: this.controlCamposInfoEco.validaValoresPosi.mensaje,
      });
      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          console.error(this.controlCamposInfoEco.validaValoresPosi.mensaje);
        }
      });
    }
    if (this.controlCamposInfoEco.validaValoresDifCero.control) {
      const dialogRef = this.dialog.open(DialogsComponent, {
        width: '350px',
        data: this.controlCamposInfoEco.validaValoresDifCero.mensaje,
      });
      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          console.error(this.controlCamposInfoEco.validaValoresDifCero.mensaje);
        }
      });
    }
    if (
      this.controlCamposInfoEco.validaValoresPosi.control === false &&
      this.controlCamposInfoEco.validaValoresDifCero.control === false
    ) {
      this.controlGeneralCamposInfoEco = true;
    } else {
      this.controlGeneralCamposInfoEco = false;
    }
  }

  procesar() {
    this.resDatEcono.token = String(localStorage.getItem('token'));
    this.objDatEcono.id_oferta = this.editar.idenPredio.id_oferta?.valueOf();
    this.objDatEcono.valor_oferta_inicial = this.controlEntrevariables
      .valControlTipoOfertaVenta
      ? Number.isNaN(Number(this.formUserEco.value.valofeini?.valueOf())) ||
        this.formUserEco.value.valofeini == ''
        ? undefined
        : Number(this.formUserEco.value.valofeini?.valueOf())
      : undefined;
    this.objDatEcono.porcentaje_negociacion = this.controlEntrevariables
      .valControlTipoOfertaVenta
      ? Number.isNaN(Number(this.formUserEco.value.porneg?.valueOf())) ||
        this.formUserEco.value.porneg == ''
        ? undefined
        : Number(this.formUserEco.value.porneg?.valueOf())
      : undefined;
    this.objDatEcono.valor_oferta_final = this.controlEntrevariables
      .valControlTipoOfertaVenta
      ? Number.isNaN(Number(this.formUserEco.value.valofefin?.valueOf())) ||
        this.formUserEco.value.valofefin == ''
        ? undefined
        : Number(this.formUserEco.value.valofefin?.valueOf())
      : undefined;
    this.objDatEcono.valor_terreno =
      this.controlEntrevariables.valControlTipoOfertaVenta &&
      this.controlEntrevariables.valControlTipoPredioFincaLote
        ? Number.isNaN(Number(this.formUserEco.value.valterr?.valueOf())) ||
          this.formUserEco.value.valterr == ''
          ? undefined
          : Number(this.formUserEco.value.valterr?.valueOf())
        : undefined;
    this.objDatEcono.valor_construccion_m2 =
      !this.controlEntrevariables.valControlTipoPredioLote &&
      this.controlEntrevariables.valControlTipoOfertaVenta
        ? Number.isNaN(Number(this.formUserEco.value.valcm2?.valueOf())) ||
          this.formUserEco.value.valcm2 == ''
          ? undefined
          : Number(this.formUserEco.value.valcm2?.valueOf())
        : undefined;
    this.objDatEcono.valor_area_privada =
      !this.controlEntrevariables.valControlTipoPredioLote &&
      this.controlEntrevariables.valControlTipoOfertaVenta
        ? Number.isNaN(Number(this.formUserEco.value.valap?.valueOf())) ||
          this.formUserEco.value.valap == ''
          ? undefined
          : Number(this.formUserEco.value.valap?.valueOf())
        : undefined;
    this.objDatEcono.valor_cultivo = this.controlEntrevariables
      .valControlTipoPredioFincaLote
      ? Number.isNaN(Number(this.formUserEco.value.valcul?.valueOf())) ||
        this.formUserEco.value.valcul == ''
        ? undefined
        : Number(this.formUserEco.value.valcul?.valueOf())
      : undefined;
    this.objDatEcono.avaluo_catastral =
      Number.isNaN(Number(this.formUserEco.value.valavacat?.valueOf())) ||
      this.formUserEco.value.valavacat == ''
        ? undefined
        : Number(this.formUserEco.value.valavacat?.valueOf());
    this.objDatEcono.valor_administracion = this.controlEntrevariables
      .valControlTipoPredioPH
      ? Number.isNaN(Number(this.formUserEco.value.valadmin?.valueOf())) ||
        this.formUserEco.value.valadmin == ''
        ? undefined
        : Number(this.formUserEco.value.valadmin?.valueOf())
      : undefined;
    this.objDatEcono.valor_arriendo_inicial = this.controlEntrevariables
      .valControlTipoOfertaArriendo
      ? Number.isNaN(Number(this.formUserEco.value.valarrini?.valueOf())) ||
        this.formUserEco.value.valarrini == ''
        ? undefined
        : Number(this.formUserEco.value.valarrini?.valueOf())
      : undefined;
    this.objDatEcono.valor_arriendo_final = this.controlEntrevariables
      .valControlTipoOfertaArriendo
      ? Number.isNaN(Number(this.formUserEco.value.valarrfin?.valueOf())) ||
        this.formUserEco.value.valarrfin == ''
        ? undefined
        : Number(this.formUserEco.value.valarrfin?.valueOf())
      : undefined;
    this.objDatEcono.valor_terraza_balcon_patio =
      this.controlEntrevariables.valControlTipoOfertaVenta &&
      this.controlEntrevariables.valControlTipoPredioPH
        ? Number.isNaN(Number(this.formUserEco.value.valtbp?.valueOf())) ||
          this.formUserEco.value.valtbp == ''
          ? undefined
          : Number(this.formUserEco.value.valtbp?.valueOf())
        : undefined;
    this.objDatEcono.valor_garajes = this.controlEntrevariables
      .valControlTipoOfertaVenta
      ? Number.isNaN(Number(this.formUserEco.value.valgar?.valueOf())) ||
        this.formUserEco.value.valgar == ''
        ? undefined
        : Number(this.formUserEco.value.valgar?.valueOf())
      : undefined;
    this.objDatEcono.valor_depositos = this.controlEntrevariables
      .valControlTipoOfertaVenta
      ? Number.isNaN(Number(this.formUserEco.value.valdep?.valueOf())) ||
        this.formUserEco.value.valdep == ''
        ? undefined
        : Number(this.formUserEco.value.valdep?.valueOf())
      : undefined;
    this.objDatEcono.valor_anexidades = this.controlEntrevariables
      .valControlTipoOfertaVenta
      ? Number.isNaN(Number(this.formUserEco.value.valanex?.valueOf())) ||
        this.formUserEco.value.valanex == ''
        ? undefined
        : Number(this.formUserEco.value.valanex?.valueOf())
      : undefined;

    this.validarCamposInfoEco(this.objDatEcono);

    if (
      this.editar.idenPredio.id_oferta !== undefined &&
      JSON.stringify(this.editar.infoEnono) !==
        JSON.stringify(this.objDatEcono) &&
      this.controlGeneralCamposInfoEco
    ) {
      this.api
        .capOferRestInfoEconoOferta(this.objDatEcono, this.resDatEcono.token)
        .subscribe((resDatEcono) => {
          if (resDatEcono.status === '200 OK') {
            localStorage.setItem('token', resDatEcono.token?.valueOf());
            this.editar.setInfoEconoPredio = this.objDatEcono;

            // this.envioFormVistaBack = true;
            // this.noVistaSiguienteBoton =
            //   this.editar.idenPredio.id_oferta !== undefined &&
            //   this.envioFormVistaBack
            //     ? false
            //     : true;

            const dialogRef = this.dialog.open(DialogsComponent, {
              width: '350px',
              data: `El valor del id oferta se inicializó y fue asignado como: ${this.editar.idenPredio.id_oferta}.
              Se evidencia actualizaciones por lo tanto se actualizan los datos.`,
            });
            dialogRef.afterClosed().subscribe((res) => {
              if (res) {
                console.warn(
                  `El valor de id_oferta  se inicializó y fue asignado su valor es de: ${this.editar.idenPredio.id_oferta}. Se evidencia actualizaciones por lo tanto se actualizan los datos.`
                );
              }
            });
          } else {
            const dialogRef = this.dialog.open(DialogsComponent, {
              width: '350px',
              data: `Error para la oferta: ${this.editar.idenPredio.id_oferta}. No se guardaron los cambios a los datos.`,
            });
            dialogRef.afterClosed().subscribe((res) => {
              if (res) {
                console.warn(
                  `Error no status '200 OK' para la oferta: ${this.editar.idenPredio.id_oferta}. No se actualizan los datos.`
                );
              }
            });
          }
        });
    } else {
      if (this.controlGeneralCamposInfoEco) {
        const dialogRef = this.dialog.open(DialogsComponent, {
          width: '350px',
          data: `El valor de id oferta ya fue asignado su valor es de: ${this.editar.idenPredio.id_oferta}. No se evidencia actualizaciones.`,
        });
        dialogRef.afterClosed().subscribe((res) => {
          if (res) {
            console.warn(
              `El valor de id_oferta ya fue asignado su valor es de: ${this.editar.idenPredio.id_oferta}. No se evidencia actualizaciones.`
            );
          }
        });
      }
    }
  }
}
