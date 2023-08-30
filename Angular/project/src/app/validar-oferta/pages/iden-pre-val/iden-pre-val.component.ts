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

import { ValidarService } from '../../../servicios/validar/validar.service';
import { resCearOfer } from 'src/app/modelos/res-crear-ofer.interface';

import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from '../../components/dialogs/dialogs.component';

@Component({
  selector: 'app-iden-pre-val',
  templateUrl: './iden-pre-val.component.html',
  styleUrls: ['./iden-pre-val.component.css'],
})
export class IdenPreValComponent {
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    // public validar: validar,
    public validar: ValidarService,
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

  get estado_oferta() {
    return this.formUser.get('estado_oferta') as FormControl;
  }

  get obs_verifica() {
    return this.formUser.get('obs_verifica') as FormControl;
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
        value: String(this.validar.idenPredio.id_oferta),
        disabled: true,
      },
      Validators.required,
    ],
    numprenue: [
      { value: this.validar.idenPredio.npn, disabled: true },
      [
        Validators.minLength(20),
        Validators.maxLength(30),
        IdenPreValComponent.patternValidator(/^\d+$/, {
          hasNumber: true,
        }),
      ],
    ],
    numpreant: [
      { value: this.validar.idenPredio.npa, disabled: true },
      [
        Validators.minLength(10),
        Validators.maxLength(20),
        IdenPreValComponent.patternValidator(/^\d+$/, {
          hasNumber: true,
        }),
      ],
    ],
    codhom: [
      { value: this.validar.idenPredio.codigo_homologado, disabled: true },
      [Validators.maxLength(20)],
    ],
    matrinmb: [
      { value: this.validar.idenPredio.matricula, disabled: true },
      [Validators.maxLength(20)],
    ],
    conjur: [
      { value: this.validar.idenPredio.condicion_juridica, disabled: true },
      Validators.required,
    ],
    tipofer: [
      { value: this.validar.idenPredio.tipo_oferta, disabled: true },
      Validators.required,
    ],
    tippre: [
      { value: this.validar.idenPredio.tipo_predio, disabled: true },
      Validators.required,
    ],
    oriofer: [
      { value: this.validar.idenPredio.oferta_origen, disabled: true },
      Validators.required,
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
  });

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

  procesar(): void {
    this.resIdenpre.token = String(localStorage.getItem('token'));
    this.objIdenPre.estado_oferta = String(
      this.formUser.value.estado_oferta?.valueOf()
    );
    this.objIdenPre.obs_verifica =
      this.formUser.value.obs_verifica?.valueOf() == '' ||
      this.formUser.value.obs_verifica?.valueOf() == undefined ||
      this.formUser.value.obs_verifica?.valueOf() == null
        ? 'Sin observaciones.'
        : this.formUser.value.obs_verifica?.valueOf();

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
