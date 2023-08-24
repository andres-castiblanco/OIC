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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApiService } from '../../../servicios/api/api.service';
import { idenPreI } from '../../../modelos/crear-oferta-iden-pre.interface';
import { resIdenPreI } from '../../../modelos/res-iden-pre.interface';

import { ValrelacionesService } from '../../../servicios/valrelaciones/valrelaciones.service';
import { resCearOfer } from 'src/app/modelos/res-crear-ofer.interface';

import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from '../../components/dialogs/dialogs.component';

@Component({
  selector: 'app-iden-pre',
  templateUrl: './iden-pre.component.html',
  styleUrls: ['./iden-pre.component.css'],
})
export class IdenPreComponent {
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public valrelacionesService: ValrelacionesService,
    public dialog: MatDialog
  ) {}

  get idoferta() {
    return this.formUser.get('idoferta') as FormControl;
  }

  get numprenue() {
    return this.formUser.get('numprenue') as FormControl;
  }

  get numpreant() {
    return this.formUser.get('numpreant') as FormControl;
  }

  get codhom() {
    return this.formUser.get('codhom') as FormControl;
  }

  get matrinmb() {
    return this.formUser.get('matrinmb') as FormControl;
  }

  get conjur() {
    return this.formUser.get('conjur') as FormControl;
  }

  get tipofer() {
    return this.formUser.get('tipofer') as FormControl;
  }

  get tippre() {
    return this.formUser.get('tippre') as FormControl;
  }

  get oriofer() {
    return this.formUser.get('oriofer') as FormControl;
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

  formUser = this.fb.group({
    idoferta: [
      {
        value: String(this.valrelacionesService.idenPredio.id_oferta),
        disabled: true,
      },
      Validators.required,
    ],
    numprenue: [
      this.valrelacionesService.idenPredio.npn,
      [
        Validators.minLength(20),
        Validators.maxLength(30),
        IdenPreComponent.patternValidator(/^\d+$/, {
          hasNumber: true,
        }),
      ],
    ],
    numpreant: [
      this.valrelacionesService.idenPredio.npa,
      [
        Validators.minLength(10),
        Validators.maxLength(20),
        IdenPreComponent.patternValidator(/^\d+$/, {
          hasNumber: true,
        }),
      ],
    ],
    codhom: [
      this.valrelacionesService.idenPredio.codigo_homologado,
      [Validators.maxLength(20)],
    ],
    matrinmb: [
      this.valrelacionesService.idenPredio.matricula,
      [Validators.maxLength(20)],
    ],
    conjur: [
      this.valrelacionesService.idenPredio.condicion_juridica,
      Validators.required,
    ],
    tipofer: [
      this.valrelacionesService.idenPredio.tipo_oferta,
      Validators.required,
    ],
    tippre: [
      this.valrelacionesService.idenPredio.tipo_predio,
      Validators.required,
    ],
    oriofer: [
      this.valrelacionesService.idenPredio.oferta_origen,
      Validators.required,
    ],
  });

  objIdenPre: idenPreI = {
    id_oferta: this.valrelacionesService.idenPredio.id_oferta,
    npn: undefined,
    npa: undefined,
    codigo_homologado: undefined,
    matricula: undefined,
    condicion_juridica: undefined,
    tipo_oferta: undefined,
    tipo_predio: undefined,
    oferta_origen: undefined,
    estado_oferta: 1,
    obs_verifica: 'Sin comentarios',
  };

  noVistaOfer: boolean =
    this.valrelacionesService.idenPredio.id_oferta === undefined ? false : true;
  noVistaSiguiente: boolean =
    this.valrelacionesService.idenPredio.id_oferta === undefined ? true : false;

  resIdenpre: resCearOfer = {
    id_oferta: null,
    status: null,
    token: String(localStorage.getItem('token')),
  };

  procesar(): void {
    this.resIdenpre.token = String(localStorage.getItem('token'));
    this.objIdenPre.npa = this.formUser.value.numpreant?.valueOf();
    this.objIdenPre.codigo_homologado = this.formUser.value.codhom?.valueOf();
    this.objIdenPre.matricula = this.formUser.value.matrinmb?.valueOf();
    this.objIdenPre.condicion_juridica = this.formUser.value.conjur?.valueOf();

    if (
      this.objIdenPre.condicion_juridica === 'NPH' ||
      this.objIdenPre.condicion_juridica === 'PARQUE_CEMENTERIO_MATRIZ' ||
      this.objIdenPre.condicion_juridica ===
        'PARQUE_CEMENTERIO_UNIDAD_PREDIAL' ||
      this.objIdenPre.condicion_juridica === 'VIA' ||
      this.objIdenPre.condicion_juridica === 'INFORMAL' ||
      this.objIdenPre.condicion_juridica === 'BIEN_USO_PUBLICO'
    ) {
      this.valrelacionesService.infoFis.area_privada = undefined;
      this.valrelacionesService.infoFis.coeficiente = undefined;
      this.valrelacionesService.infoEnono.valor_terraza_balcon_patio =
        undefined;
      this.valrelacionesService.datGen.proyecto_inmobiliario = undefined;
      this.valrelacionesService.datGen.proyecto_descripcion = undefined;
    }

    this.objIdenPre.npn = this.formUser.value.numprenue?.valueOf();
    this.objIdenPre.tipo_oferta = this.formUser.value.tipofer?.valueOf();

    if (this.objIdenPre.tipo_oferta === 'ARRIENDO') {
      this.valrelacionesService.infoEnono.valor_oferta_inicial = undefined;
      this.valrelacionesService.infoEnono.valor_oferta_final = undefined;
      this.valrelacionesService.infoEnono.porcentaje_negociacion = undefined;
      this.valrelacionesService.infoEnono.valor_terreno = undefined;
      this.valrelacionesService.infoEnono.valor_construccion_m2 = undefined;
      this.valrelacionesService.infoEnono.valor_area_privada = undefined;
      this.valrelacionesService.infoEnono.valor_garajes = undefined;
      this.valrelacionesService.infoEnono.valor_depositos = undefined;
      this.valrelacionesService.infoEnono.valor_anexidades = undefined;
    } else {
      this.valrelacionesService.infoEnono.valor_arriendo_inicial = undefined;
      this.valrelacionesService.infoEnono.valor_arriendo_final = undefined;
      this.valrelacionesService.infoEnono.valor_terraza_balcon_patio =
        undefined;
    }

    this.objIdenPre.tipo_predio = this.formUser.value.tippre?.valueOf();
    if (this.objIdenPre.tipo_predio === 'RURAL') {
      this.valrelacionesService.locPre.barrio = undefined;
    } else {
      this.valrelacionesService.infoFis.tipo_inmueble_rural = undefined;
    }
    this.objIdenPre.oferta_origen = this.formUser.value.oriofer?.valueOf();

    if (
      this.valrelacionesService.idenPredio.id_oferta === undefined ||
      JSON.stringify(this.valrelacionesService.idenPredio) !==
        JSON.stringify(this.objIdenPre)
    ) {
      this.api
        .capOferRestIDOferta(this.objIdenPre, this.resIdenpre.token)
        .subscribe((resIdenpre) => {
          if (resIdenpre.status === '200 OK') {
            localStorage.setItem('token', resIdenpre.token?.valueOf());
            this.objIdenPre.id_oferta = Number(resIdenpre.id_oferta);
            this.valrelacionesService.idenPredio.id_oferta = Number(
              resIdenpre.id_oferta
            );
            this.valrelacionesService.setIdenPredio = this.objIdenPre;
            this.noVistaOfer = true;
            this.noVistaSiguiente = false;
            this.formUser.controls['idoferta'].setValue(
              String(this.valrelacionesService.idenPredio.id_oferta)
            );
            this.valrelacionesService.habilitarVista(
              'noVistaLocOfer',
              this.noVistaSiguiente
            );
            const dialogRef = this.dialog.open(DialogsComponent, {
              width: '350px',
              data: `El valor del id oferta se inicializó y fue asignado como: ${this.valrelacionesService.idenPredio.id_oferta}.
            Se evidencia actualizaciones por lo tanto se actualizan los datos.`,
            });
            dialogRef.afterClosed().subscribe((res) => {
              if (res) {
                console.warn(
                  `El valor de id_oferta se inicializó y fue asignado su valor es de: ${this.valrelacionesService.idenPredio.id_oferta}. Se evidencia actualizaciones por lo tanto se actualizan los datos.`
                );
              }
            });
          } else {
            const dialogRef = this.dialog.open(DialogsComponent, {
              width: '350px',
              data: `Error para la oferta: ${this.valrelacionesService.idenPredio.id_oferta}. No se guardaron los cambios a los datos.`,
            });
            dialogRef.afterClosed().subscribe((res) => {
              if (res) {
                console.warn(
                  `Error no status '200 OK' para la oferta: ${this.valrelacionesService.idenPredio.id_oferta}. No se actualizan los datos.`
                );
              }
            });
          }
        });
    } else {
      const dialogRef = this.dialog.open(DialogsComponent, {
        width: '350px',
        data: `El valor de id oferta ya fue asignado su valor es de: ${this.valrelacionesService.idenPredio.id_oferta}. No se evidencia actualizaciones.`,
      });
      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          console.warn(
            `El valor de id_oferta ya fue asignado su valor es de: ${this.valrelacionesService.idenPredio.id_oferta}. No se evidencia actualizaciones.`
          );
        }
      });
    }
  }
}
