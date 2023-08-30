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
import { ValidarService } from '../../../servicios/validar/validar.service';

import { infoEconoI } from '../../../modelos/crear-oferta-inf-eco.interface';
import { resCearOfer } from '../../../modelos/res-crear-ofer.interface';

import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from '../../components/dialogs/dialogs.component';
import { idenPreI } from 'src/app/modelos/crear-oferta-iden-pre.interface';

@Component({
  selector: 'app-inf-eco-val',
  templateUrl: './inf-eco-val.component.html',
  styleUrls: ['./inf-eco-val.component.css'],
})
export class InfEcoValComponent {
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public validar: ValidarService,
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

  get estado_oferta() {
    return this.formUserEco.get('estado_oferta') as FormControl;
  }

  get obs_verifica() {
    return this.formUserEco.get('obs_verifica') as FormControl;
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
          value: this.validar.idenPredio.id_oferta,
          disabled: true,
        },
        Validators.required,
      ],
      valofeini: [
        {
          value: this.validar.infoEnono.valor_oferta_final,
          disabled: true,
        },
        [
          Validators.max(10000000000000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],
      porneg: [
        {
          value: this.validar.infoEnono.porcentaje_negociacion,
          disabled: true,
        },
        [Validators.max(100), Validators.min(0)],
      ],
      valofefin: [
        {
          value: this.validar.infoEnono.valor_oferta_final,
          disabled: true,
        },
        [
          Validators.max(10000000000000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],
      valterr: [
        {
          value: this.validar.infoEnono.valor_terreno,
          disabled: true,
        },
        [],
      ],
      valcm2: [
        {
          value: this.validar.infoEnono.valor_construccion_m2,
          disabled: true,
        },
        [],
      ],
      valap: [
        {
          value: this.validar.infoEnono.valor_area_privada,
          disabled: true,
        },
        [],
      ],
      valcul: [
        {
          value: this.validar.infoEnono.valor_cultivo,
          disabled: true,
        },
        [
          Validators.maxLength(20),
          InfEcoValComponent.patternValidator(
            /^(?!(^0+(?:\.0+)?$))(^\d+(?:\.\d+)?$)/,
            {
              hasNumber: true,
            }
          ),
        ],
      ],
      valavacat: [
        {
          value: this.validar.infoEnono.avaluo_catastral,
          disabled: true,
        },
        [
          Validators.maxLength(20),
          InfEcoValComponent.patternValidator(
            /^(?!(^0+(?:\.0+)?$))(^\d+(?:\.\d+)?$)/,
            {
              hasNumber: true,
            }
          ),
        ],
      ],
      valadmin: [
        {
          value: this.validar.infoEnono.valor_administracion,
          disabled: true,
        },
        [
          Validators.maxLength(20),
          InfEcoValComponent.patternValidator(
            /^(?!(^0+(?:\.0+)?$))(^\d+(?:\.\d+)?$)/,
            {
              hasNumber: true,
            }
          ),
        ],
      ],
      valarrini: [
        {
          value: this.validar.infoEnono.valor_arriendo_inicial,
          disabled: true,
        },
        [
          Validators.max(10000000000000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],
      valarrfin: [
        {
          value: this.validar.infoEnono.valor_arriendo_final,
          disabled: true,
        },
        [
          Validators.max(10000000000000000),
          Validators.min(0.000000000000000000000000001),
        ],
      ],

      valtbp: [
        {
          value: this.validar.infoEnono.valor_terraza_balcon_patio,
          disabled: true,
        },
        [
          Validators.maxLength(20),
          InfEcoValComponent.patternValidator(
            /^(?!(^0+(?:\.0+)?$))(^\d+(?:\.\d+)?$)/,
            {
              hasNumber: true,
            }
          ),
        ],
      ],

      valgar: [
        {
          value: this.validar.infoEnono.valor_garajes,
          disabled: true,
        },
        [
          Validators.maxLength(20),
          InfEcoValComponent.patternValidator(
            /^(?!(^0+(?:\.0+)?$))(^\d+(?:\.\d+)?$)/,
            {
              hasNumber: true,
            }
          ),
        ],
      ],
      valdep: [
        {
          value: this.validar.infoEnono.valor_depositos,
          disabled: true,
        },
        [
          Validators.maxLength(20),
          InfEcoValComponent.patternValidator(
            /^(?!(^0+(?:\.0+)?$))(^\d+(?:\.\d+)?$)/,
            {
              hasNumber: true,
            }
          ),
        ],
      ],
      valanex: [
        {
          value: this.validar.infoEnono.valor_anexidades,
          disabled: true,
        },
        [
          Validators.maxLength(20),
          InfEcoValComponent.patternValidator(
            /^(?!(^0+(?:\.0+)?$))(^\d+(?:\.\d+)?$)/,
            {
              hasNumber: true,
            }
          ),
        ],
      ],
      estado_oferta: [
        {
          value: String(this.validar.idenPredio.estado_oferta),
          disabled: false,
        },
        Validators.required,
      ],
      obs_verifica: [
        {
          value: String(this.validar.idenPredio.obs_verifica),
          disabled: false,
        },
      ],
    },
    {
      validator: [
        (group: any) => {
          if (this.validar.idenPredio.tipo_oferta?.valueOf() === 'VENTA') {
            return Validators.required(group.controls.valofeini);
          }
          return null;
        },
        (group: any) => {
          if (this.validar.idenPredio.tipo_oferta?.valueOf() === 'VENTA') {
            return Validators.required(group.controls.porneg);
          }
          return null;
        },
        (group: any) => {
          if (this.validar.idenPredio.tipo_oferta?.valueOf() === 'VENTA') {
            return Validators.required(group.controls.valofefin);
          }
          return null;
        },
        (group: any) => {
          if (this.validar.idenPredio.tipo_oferta?.valueOf() === 'ARRIENDO') {
            return Validators.required(group.controls.valarrini);
          }
          return null;
        },
        (group: any) => {
          if (this.validar.idenPredio.tipo_oferta?.valueOf() === 'ARRIENDO') {
            return Validators.required(group.controls.valarrfin);
          }
          return null;
        },
        InfEcoValComponent.valoresAreasValidaciones,
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
      this.validar.idenPredio.tipo_oferta === 'VENTA' ? true : false,
    valControlTipoOfertaArriendo:
      this.validar.idenPredio.tipo_oferta === 'ARRIENDO' ? true : false,
    valControlTipoPredioPH:
      this.validar.idenPredio.condicion_juridica?.valueOf() === 'PH' ||
      this.validar.idenPredio.condicion_juridica?.valueOf() === 'PH_MATRIZ' ||
      this.validar.idenPredio.condicion_juridica?.valueOf() ===
        'PH_UNIDAD_PREDIAL' ||
      this.validar.idenPredio.condicion_juridica?.valueOf() === 'CONDOMINIO' ||
      this.validar.idenPredio.condicion_juridica?.valueOf() ===
        'CONDOMINIO_MATRIZ' ||
      this.validar.idenPredio.condicion_juridica?.valueOf() ===
        'CONDOMINIO_UNIDAD_PREDIAL'
        ? true
        : false,
    valControlTipoPredioLote:
      this.validar.datGen.tipo_inmueble?.valueOf() === 'LOTE' ? true : false,
    valControlTipoPredioFincaLote:
      this.validar.datGen.tipo_inmueble?.valueOf() === 'FINCA' ||
      this.validar.datGen.tipo_inmueble?.valueOf() === 'LOTE'
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

  objIdenPre: idenPreI = {
    id_oferta: this.validar.idenPredio.id_oferta,
    npn: this.validar.idenPredio.npn,
    npa: this.validar.idenPredio.npa,
    codigo_homologado: this.validar.idenPredio.codigo_homologado,
    matricula: this.validar.idenPredio.matricula,
    condicion_juridica: this.validar.idenPredio.condicion_juridica,
    tipo_oferta: this.validar.idenPredio.tipo_oferta,
    tipo_predio: this.validar.idenPredio.tipo_predio,
    oferta_origen: this.validar.idenPredio.oferta_origen,
    estado_oferta: this.validar.idenPredio.estado_oferta,
    obs_verifica: this.validar.idenPredio.obs_verifica,
  };

  resIdenpre: resCearOfer = {
    id_oferta: null,
    status: null,
    token: String(localStorage.getItem('token')),
  };

  procesar() {
    this.resIdenpre.token = String(localStorage.getItem('token'));
    this.objIdenPre.estado_oferta = String(
      this.formUserEco.value.estado_oferta?.valueOf()
    );
    this.objIdenPre.obs_verifica =
      this.formUserEco.value.obs_verifica?.valueOf() == '' ||
      this.formUserEco.value.obs_verifica?.valueOf() == undefined ||
      this.formUserEco.value.obs_verifica?.valueOf() == null
        ? 'Sin observaciones.'
        : this.formUserEco.value.obs_verifica?.valueOf();

    if (
      this.validar.idenPredio.id_oferta === undefined ||
      JSON.stringify(this.validar.idenPredio) !==
        JSON.stringify(this.objIdenPre)
    ) {
      this.api
        .capOferRestIDOferta(this.objIdenPre, this.resIdenpre.token)
        .subscribe((resIdenpre) => {
          if (resIdenpre.status === '200 OK') {
            localStorage.setItem('token', resIdenpre.token?.valueOf());
            this.validar.setIdenPredio = this.objIdenPre;
            const dialogRef = this.dialog.open(DialogsComponent, {
              width: '350px',
              data: `La validación de la oferta ${this.validar.idenPredio.id_oferta} fue almacenada exitosamente.
            Se evidencia actualizaciones por lo tanto se actualizan los datos.`,
            });
            dialogRef.afterClosed().subscribe((res) => {
              if (res) {
                console.warn(
                  `La validación de la oferta ${this.validar.idenPredio.id_oferta} fue almacenada exitosamente. Se evidencia actualizaciones por lo tanto se actualizan los datos.`
                );
              }
            });
          } else {
            const dialogRef = this.dialog.open(DialogsComponent, {
              width: '350px',
              data: `Error para la oferta: ${this.validar.idenPredio.id_oferta}. No se guardaron los cambios a los datos.`,
            });
            dialogRef.afterClosed().subscribe((res) => {
              if (res) {
                console.warn(
                  `Error no status '200 OK' para la oferta: ${this.validar.idenPredio.id_oferta}. No se actualizan los datos.`
                );
              }
            });
          }
        });
    } else {
      const dialogRef = this.dialog.open(DialogsComponent, {
        width: '350px',
        data: `Validaciones ya registradas para la oferta ${this.validar.idenPredio.id_oferta}. No se evidencia actualizaciones.`,
      });
      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          console.warn(
            `Validaciones ya registradas para la oferta ${this.validar.idenPredio.id_oferta}. No se evidencia actualizaciones.`
          );
        }
      });
    }
  }
}
