import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-inf-fis',
  templateUrl: './inf-fis.component.html',
  styleUrls: ['./inf-fis.component.css'],
})
export class InfFisComponent {
  constructor(private fb: FormBuilder) {}

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

  formUserFis = this.fb.group({
    idoferta: [{ value: '123456789', disabled: true }, Validators.required],
    atm2: [
      '',
      [
        Validators.required,
        Validators.max(1000000),
        Validators.min(0.000000000000000000000000001),
      ],
    ],
    atha: [
      '',
      [
        Validators.required,
        Validators.max(1000000),
        Validators.min(0.000000000000000000000000001),
      ],
    ],
    acm2: [
      '',
      [Validators.required, Validators.max(1000000), Validators.min(0)],
    ],
    apm2: [
      '',
      [Validators.required, Validators.max(1000000), Validators.min(0)],
    ],
    apha: [
      '',
      [Validators.required, Validators.max(1000000), Validators.min(0)],
    ],
    ac: ['', [Validators.required, Validators.max(2100), Validators.min(1400)]],
    conser: ['', Validators.required],
    desecon: ['', Validators.required],
    altedif: ['', Validators.required],
    numpis: [
      '',
      [Validators.required, Validators.max(1000), Validators.min(1)],
    ],
    tir: [''],
    tiptipo: ['', Validators.required],
    edcul: [
      '',
      [Validators.required, Validators.max(1000), Validators.min(1)],
    ],
    tipcul: ['', Validators.required],
    coef: [
      '',
      [Validators.required, Validators.max(1000), Validators.min(1)],
    ],
    serpubl: ['', Validators.required],
    estra: [
      '',
      [Validators.required, Validators.max(6), Validators.min(1)],
    ],
    garaje: [
      '',
      [Validators.required, Validators.max(50), Validators.min(1)],
    ],
    banos: [
      '',
      [Validators.required, Validators.max(50), Validators.min(1)],
    ],
    numhabi: [
      '',
      [Validators.required, Validators.max(50), Validators.min(1)],
    ],
    numdep: [
      '',
      [Validators.required, Validators.max(50), Validators.min(1)],
    ],
    conanex: [
      '',
      [Validators.required, Validators.maxLength(100)],
    ],
  });

  procesar() {
    console.log(this.formUserFis.value);
  }
}