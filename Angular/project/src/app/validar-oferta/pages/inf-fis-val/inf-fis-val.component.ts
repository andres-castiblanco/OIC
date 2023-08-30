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

import { infoFisiI } from '../../../modelos/crear-oferta-inf-fis.interface';
import { resCearOfer } from '../../../modelos/res-crear-ofer.interface';

import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from '../../components/dialogs/dialogs.component';
import { idenPreI } from 'src/app/modelos/crear-oferta-iden-pre.interface';

@Component({
  selector: 'app-inf-fis-val',
  templateUrl: './inf-fis-val.component.html',
  styleUrls: ['./inf-fis-val.component.css'],
})
export class InfFisValComponent {
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public validar: ValidarService,
    public dialog: MatDialog
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

  get estado_oferta() {
    return this.formUserFis.get('estado_oferta') as FormControl;
  }

  get obs_verifica() {
    return this.formUserFis.get('obs_verifica') as FormControl;
  }

  static areasValidaciones(control: AbstractControl) {
    const areaTerrenom2: Number = control.get('atm2')?.value;
    const areaTerrenoha: Number = control.get('atha')?.value;
    const areaConstruccionm2: Number = control.get('acm2')?.value;
    const areaPrivadanm2: Number = control.get('apm2')?.value;
    if (
      (areaTerrenom2 === undefined ||
        areaTerrenom2 === null ||
        Number.isNaN(areaTerrenom2) ||
        Number(areaTerrenom2) <= 0 ||
        Number(areaTerrenom2) > 10000000000000000) &&
      (areaTerrenoha === undefined ||
        areaTerrenoha === null ||
        Number.isNaN(areaTerrenoha) ||
        Number(areaTerrenoha) <= 0 ||
        Number(areaTerrenoha) > 10000000000000000) &&
      (areaConstruccionm2 === undefined ||
        areaConstruccionm2 === null ||
        Number.isNaN(areaConstruccionm2) ||
        Number(areaConstruccionm2) <= 0 ||
        Number(areaConstruccionm2) > 10000000000000000) &&
      (areaPrivadanm2 === undefined ||
        areaPrivadanm2 === null ||
        Number.isNaN(areaPrivadanm2) ||
        Number(areaPrivadanm2) <= 0 ||
        Number(areaPrivadanm2) > 10000000000000000)
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

  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null!;
      }
      const valid = regex.test(control.value);
      return valid ? null! : error;
    };
  }

  formUserFis = this.fb.group(
    {
      idoferta: [
        {
          value: this.validar.idenPredio.id_oferta,
          disabled: true,
        },
        Validators.required,
      ],
      atm2: [
        {
          value: this.validar.infoFis.area_terreno,
          disabled: true,
        },
        [],
      ],
      atha: [
        {
          value: this.validar.infoFis.area_terreno,
          disabled: true,
        },
        [],
      ],
      acm2: [
        {
          value: this.validar.infoFis.area_construccion,
          disabled: true,
        },
        [],
      ],
      apm2: [
        {
          value: this.validar.infoFis.area_privada,
          disabled: true,
        },
        [],
      ],
      apha: [
        {
          value: this.validar.infoFis.area_cultivo,
          disabled: true,
        },
        [
          Validators.maxLength(7),
          InfFisValComponent.patternValidator(/^\d+$/, {
            hasNumber: true,
          }),
        ],
      ],
      ac: [
        {
          value: this.validar.infoFis.ano_construccion,
          disabled: true,
        },
        [
          Validators.maxLength(4),
          InfFisValComponent.patternValidator(/^\d+$/, {
            hasNumber: true,
          }),
        ],
      ],
      conser: [
        {
          value: this.validar.infoFis.conservacion,
          disabled: true,
        },
      ],
      desecon: [
        {
          value: this.validar.infoFis.destinacion_economica,
          disabled: true,
        },
        Validators.required,
      ],
      altedif: [
        {
          value: this.validar.infoFis.altura_edificio,
          disabled: true,
        },
      ],
      numpis: [
        {
          value: this.validar.infoFis.numero_piso,
          disabled: true,
        },
        [
          Validators.maxLength(3),
          InfFisValComponent.patternValidator(/^\d+$/, {
            hasNumber: true,
          }),
        ],
      ],
      tir: [
        {
          value: this.validar.infoFis.tipo_inmueble_rural,
          disabled: true,
        },
      ],
      tiptipo: [
        {
          value: this.validar.infoFis.tipologia_tipo,
          disabled: true,
        },
      ],
      edcul: [
        {
          value: this.validar.infoFis.edad_cultivo,
          disabled: true,
        },
        [
          Validators.maxLength(4),
          InfFisValComponent.patternValidator(/^\d+$/, {
            hasNumber: true,
          }),
        ],
      ],
      tipcul: [
        {
          value: this.validar.infoFis.tipo_cultivo,
          disabled: true,
        },
      ],
      coef: [
        {
          value: this.validar.infoFis.coeficiente,
          disabled: true,
        },
        [
          Validators.maxLength(3),
          InfFisValComponent.patternValidator(/^\d+$/, {
            hasNumber: true,
          }),
        ],
      ],
      serpubl: [
        {
          value: this.validar.infoFis.servicios_publicos,
          disabled: true,
        },
        Validators.required,
      ],
      estra: [
        {
          value: this.validar.infoFis.estrato,
          disabled: true,
        },
        [
          Validators.maxLength(2),
          InfFisValComponent.patternValidator(/^\d+$/, {
            hasNumber: true,
          }),
        ],
      ],
      garaje: [
        {
          value: this.validar.infoFis.garajes,
          disabled: true,
        },
        [
          Validators.maxLength(2),
          InfFisValComponent.patternValidator(/^\d+$/, {
            hasNumber: true,
          }),
        ],
      ],
      banos: [
        {
          value: this.validar.infoFis.numero_banos,
          disabled: true,
        },
        [
          Validators.maxLength(2),
          InfFisValComponent.patternValidator(/^\d+$/, {
            hasNumber: true,
          }),
        ],
      ],
      numhabi: [
        {
          value: this.validar.infoFis.numero_habitaciones,
          disabled: true,
        },
        [
          Validators.maxLength(2),
          InfFisValComponent.patternValidator(/^\d+$/, {
            hasNumber: true,
          }),
        ],
      ],
      numdep: [
        {
          value: this.validar.infoFis.numero_depositos,
          disabled: true,
        },
        [
          Validators.maxLength(2),
          InfFisValComponent.patternValidator(/^\d+$/, {
            hasNumber: true,
          }),
        ],
      ],
      conanex: [
        {
          value: this.validar.infoFis.construcciones_anexas,
          disabled: true,
        },
        [Validators.maxLength(100)],
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
          if (
            this.validar.idenPredio.tipo_predio?.valueOf() === 'URBANO' ||
            this.validar.idenPredio.tipo_predio?.valueOf() ===
              'CORREGIMIENTO_Y_CASERIOS'
          ) {
            return Validators.required(group.controls.tiptipo);
          }
          return null;
        },
        InfFisValComponent.areasValidaciones,
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
    token: String(localStorage.getItem('token')),
  };

  // envioFormVistaBack: boolean = false;
  // noVistaSiguienteBoton: boolean = true;

  controlEntrevariables = {
    val_area_terreno:
      this.validar.datGen.tipo_inmueble?.valueOf() === 'FINCA' ||
      this.validar.datGen.tipo_inmueble?.valueOf() === 'LOTE' ||
      this.validar.datGen.tipo_inmueble?.valueOf() === 'CASA' ||
      this.validar.datGen.tipo_inmueble?.valueOf() === 'CASA_CAMPESTRE' ||
      this.validar.datGen.tipo_inmueble?.valueOf() === 'CASA_LOTE' ||
      this.validar.datGen.tipo_inmueble?.valueOf() === 'BODEGA' ||
      this.validar.datGen.tipo_inmueble?.valueOf() === 'CABAÑA' ||
      this.validar.datGen.tipo_inmueble?.valueOf() === 'OTRO'
        ? true
        : false,
    val_n_lote:
      this.validar.datGen.tipo_inmueble?.valueOf() === 'LOTE' ? false : true,
    val_area_privada:
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
    val_tipo_rural:
      this.validar.idenPredio.tipo_predio?.valueOf() === 'RURAL' ? true : false,
    val_n_lote_finca:
      this.validar.datGen.tipo_inmueble?.valueOf() === 'FINCA' ||
      this.validar.datGen.tipo_inmueble?.valueOf() === 'LOTE'
        ? true
        : false,
  };

  controlCamposInfoFisi = {
    validaAreasPosi: {
      control: true,
      funcionControl: (objDatFisi: infoFisiI) => {
        if (
          objDatFisi.area_terreno?.valueOf()! < 0 ||
          objDatFisi.area_construccion?.valueOf()! < 0 ||
          objDatFisi.area_privada?.valueOf()! < 0 ||
          objDatFisi.area_cultivo?.valueOf()! < 0
        ) {
          return true;
        } else {
          return false;
        }
      },
      mensaje:
        'Error, se está digitando un valor negativo en los valores de área. Por esto, no se realiza el envío de la información. Por favor revisar.',
    },
    validaAreasDifCero: {
      control: true,
      funcionControl: (objDatFisi: infoFisiI) => {
        if (
          objDatFisi.area_terreno?.valueOf()! == 0 ||
          objDatFisi.area_construccion?.valueOf()! == 0 ||
          objDatFisi.area_privada?.valueOf()! == 0 ||
          objDatFisi.area_cultivo?.valueOf()! == 0
        ) {
          return true;
        } else {
          return false;
        }
      },
      mensaje:
        'Error, se está digitando un valor igual a cero en los valores de área. Por esto, no se realiza el envío de la información. Por favor revisar.',
    },
  };

  controlGeneralCamposInfoFisi: Boolean = false;

  validarCamposInfoFisi(objDatFisi: infoFisiI) {
    this.controlCamposInfoFisi.validaAreasPosi.control =
      this.controlCamposInfoFisi.validaAreasPosi.funcionControl(objDatFisi);
    this.controlCamposInfoFisi.validaAreasDifCero.control =
      this.controlCamposInfoFisi.validaAreasDifCero.funcionControl(objDatFisi);
    if (this.controlCamposInfoFisi.validaAreasPosi.control) {
      const dialogRef = this.dialog.open(DialogsComponent, {
        width: '350px',
        data: this.controlCamposInfoFisi.validaAreasPosi.mensaje,
      });
      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          console.error(this.controlCamposInfoFisi.validaAreasPosi.mensaje);
        }
      });
    }
    if (this.controlCamposInfoFisi.validaAreasDifCero.control) {
      const dialogRef = this.dialog.open(DialogsComponent, {
        width: '350px',
        data: this.controlCamposInfoFisi.validaAreasDifCero.mensaje,
      });
      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          console.error(this.controlCamposInfoFisi.validaAreasDifCero.mensaje);
        }
      });
    }
    if (
      this.controlCamposInfoFisi.validaAreasPosi.control === false &&
      this.controlCamposInfoFisi.validaAreasDifCero.control === false
    ) {
      this.controlGeneralCamposInfoFisi = true;
    } else {
      this.controlGeneralCamposInfoFisi = false;
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
      this.formUserFis.value.estado_oferta?.valueOf()
    );
    this.objIdenPre.obs_verifica =
      this.formUserFis.value.obs_verifica?.valueOf() == '' ||
      this.formUserFis.value.obs_verifica?.valueOf() == undefined ||
      this.formUserFis.value.obs_verifica?.valueOf() == null
        ? 'Sin observaciones.'
        : this.formUserFis.value.obs_verifica?.valueOf();

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
