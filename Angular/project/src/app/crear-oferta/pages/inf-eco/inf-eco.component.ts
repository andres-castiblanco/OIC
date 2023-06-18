import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';
@Component({
  selector: 'app-inf-eco',
  templateUrl: './inf-eco.component.html',
  styleUrls: ['./inf-eco.component.css'],
})
export class InfEcoComponent {
  constructor(private fb: FormBuilder) {}

  get idoferta() {
    return this.formUserEco.get('idoferta') as FormControl;
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

  formUserEco = this.fb.group({
    idoferta: [{ value: '123456789', disabled: true }, Validators.required],
    valofeini: [
      '',
      [
        Validators.required,
        Validators.max(10000000000000000),
        Validators.min(0.000000000000000000000000001),
      ],
    ],
    porneg: ['', [Validators.required, Validators.max(100), Validators.min(0)]],
    valofefin: [
      '',
      [
        Validators.required,
        Validators.max(10000000000000000),
        Validators.min(0.000000000000000000000000001),
      ],
    ],
    valterr: [
      '',
      [
        Validators.required,
        Validators.max(10000000000000000),
        Validators.min(0.000000000000000000000000001),
      ],
    ],
    valcm2: [
      '',
      [
        Validators.required,
        Validators.max(10000000000000000),
        Validators.min(0.000000000000000000000000001),
      ],
    ],
    valap: [
      '',
      [
        Validators.required,
        Validators.max(10000000000000000),
        Validators.min(0.000000000000000000000000001),
      ],
    ],
    valcul: [
      '',
      [
        Validators.required,
        Validators.max(10000000000000000),
        Validators.min(0.000000000000000000000000001),
      ],
    ],
    valavacat: [
      '',
      [
        Validators.required,
        Validators.max(10000000000000000),
        Validators.min(0.000000000000000000000000001),
      ],
    ],
    valadmin: [
      '',
      [
        Validators.required,
        Validators.max(10000000000000000),
        Validators.min(0.000000000000000000000000001),
      ],
    ],
    valarrini: [
      '',
      [
        Validators.required,
        Validators.max(10000000000000000),
        Validators.min(0.000000000000000000000000001),
      ],
    ],
    valarrfin: [
      '',
      [
        Validators.required,
        Validators.max(10000000000000000),
        Validators.min(0.000000000000000000000000001),
      ],
    ],

    valtbp: [
      '',
      [
        Validators.required,
        Validators.max(10000000000000000),
        Validators.min(0.000000000000000000000000001),
      ],
    ],

    valgar: [
      '',
      [
        Validators.required,
        Validators.max(10000000000000000),
        Validators.min(0.000000000000000000000000001),
      ],
    ],
    valdep: [
      '',
      [
        Validators.required,
        Validators.max(10000000000000000),
        Validators.min(0.000000000000000000000000001),
      ],
    ],
    valanex: [
      '',
      [
        Validators.required,
        Validators.max(10000000000000000),
        Validators.min(0.000000000000000000000000001),
      ],
    ],
  });

  procesar() {
    console.log(this.formUserEco.value);
  }
}
