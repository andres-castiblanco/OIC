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

@Component({
  selector: 'app-iden-pre',
  templateUrl: './iden-pre.component.html',
  styleUrls: ['./iden-pre.component.css'],
})
export class IdenPreComponent {
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public valrelacionesService: ValrelacionesService
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

  procesar() {
    this.objIdenPre.npa = this.formUser.value.numpreant?.valueOf();
    this.objIdenPre.codigo_homologado = this.formUser.value.codhom?.valueOf();
    this.objIdenPre.matricula = this.formUser.value.matrinmb?.valueOf();
    this.objIdenPre.condicion_juridica = this.formUser.value.conjur?.valueOf();
    this.objIdenPre.npn = this.formUser.value.numprenue?.valueOf();
    this.objIdenPre.tipo_oferta = this.formUser.value.tipofer?.valueOf();
    this.objIdenPre.tipo_predio = this.formUser.value.tippre?.valueOf();
    this.objIdenPre.oferta_origen = this.formUser.value.oriofer?.valueOf();

    if (
      this.valrelacionesService.idenPredio.id_oferta === undefined ||
      JSON.stringify(this.valrelacionesService.idenPredio) !==
        JSON.stringify(this.objIdenPre)
    ) {
      this.api.capOferRestIDOferta(this.objIdenPre).subscribe((data) => {
        this.objIdenPre.id_oferta = Number(data);
        this.valrelacionesService.idenPredio.id_oferta = Number(data);
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
        console.warn(
          `El valor de id_oferta se inicializó y fue asignado su valor es de: ${this.valrelacionesService.idenPredio.id_oferta}. Se evidencia actualizaciones por lo tanto se actualizan los datos.`
        );
      });
    } else {
      console.warn(
        `El valor de id_oferta ya fue asignado su valor es de: ${this.valrelacionesService.idenPredio.id_oferta}. No se evidencia actualizaciones.`
      );
    }
  }
}
