import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApiService } from '../../../servicios/api/api.service';
import { idenPreI } from '../../../modelos/crear-oferta-iden-pre.interface';

@Component({
  selector: 'app-iden-pre',
  templateUrl: './iden-pre.component.html',
  styleUrls: ['./iden-pre.component.css'],
})
export class IdenPreComponent {
  constructor(private fb: FormBuilder, private api: ApiService) {}

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

  formUser = this.fb.group({
    idoferta: [{ value: '', disabled: true }, Validators.required],
    numprenue: [
      '',
      [Validators.required, Validators.minLength(30), Validators.maxLength(30)],
    ],
    numpreant: [
      '',
      [Validators.required, Validators.minLength(20), Validators.maxLength(20)],
    ],
    codhom: ['', [Validators.maxLength(20)]],
    matrinmb: ['', [Validators.maxLength(20)]],
    conjur: ['', Validators.required],
    tipofer: ['', Validators.required],
    tippre: ['', Validators.required],
    oriofer: ['', Validators.required],
  });

  objIdenPre: idenPreI = {
    numero_predial_nuevo: '',
    numero_predial_antiguo: '',
    codigo_homologado: '',
    matricula_inmobiliaria: '',
    condicion_juridica: '',
    tipo_oferta: '',
    tipo_predio: '',
    oferta_origen: '',
    estado_oferta: 1,
    obs_verifica: 'Sin comentarios' as unknown | Text,
  };

  procesar() {
    this.objIdenPre.numero_predial_antiguo = this.formUser.value.numpreant;
    this.objIdenPre.codigo_homologado = this.formUser.value.codhom;
    this.objIdenPre.matricula_inmobiliaria = this.formUser.value.matrinmb;
    this.objIdenPre.condicion_juridica = this.formUser.value.conjur;
    this.objIdenPre.numero_predial_nuevo = this.formUser.value.numprenue;
    this.objIdenPre.tipo_oferta = this.formUser.value.tipofer;
    this.objIdenPre.tipo_predio = this.formUser.value.tippre;
    this.objIdenPre.oferta_origen = this.formUser.value.oriofer;

    this.api.capOferRestIDOferta(this.objIdenPre).subscribe((data) => {
      console.log(data);
    });
    // console.log(this.objIdenPre);
  }
}
