import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';
@Component({
  selector: 'app-loc-pre',
  templateUrl: './loc-pre.component.html',
  styleUrls: ['./loc-pre.component.css'],
})
export class LocPreComponent {
  constructor(private fb: FormBuilder) {}

  get idoferta() {
    return this.formUserLoca.get('idoferta') as FormControl;
  }

  get dep() {
    return this.formUserLoca.get('dep') as FormControl;
  }

  get mun() {
    return this.formUserLoca.get('mun') as FormControl;
  }

  get nombar() {
    return this.formUserLoca.get('nombar') as FormControl;
  }

  get nomver() {
    return this.formUserLoca.get('nomver') as FormControl;
  }

  get lat() {
    return this.formUserLoca.get('lat') as FormControl;
  }

  get lon() {
    return this.formUserLoca.get('lon') as FormControl;
  }

  get dir01() {
    return this.formUserLoca.get('dir01') as FormControl;
  }

  get dir02() {
    return this.formUserLoca.get('dir02') as FormControl;
  }

  get dir03() {
    return this.formUserLoca.get('dir03') as FormControl;
  }

  get dir04() {
    return this.formUserLoca.get('dir04') as FormControl;
  }

  get dir05() {
    return this.formUserLoca.get('dir05') as FormControl;
  }

  get dir06() {
    return this.formUserLoca.get('dir06') as FormControl;
  }

  get dir07() {
    return this.formUserLoca.get('dir07') as FormControl;
  }

  get dir08() {
    return this.formUserLoca.get('dir08') as FormControl;
  }

  formUserLoca = this.fb.group({
    idoferta: [{ value: '123456789', disabled: true }, Validators.required],
    dep: ['', Validators.required],
    mun: ['', Validators.required],
    nombar: ['', [Validators.required, Validators.maxLength(30)]],
    nomver: ['', [Validators.required, Validators.maxLength(30)]],
    lat: [
      '',
      [
        Validators.required,
        Validators.max(15),
        Validators.min(-5),
        Validators.maxLength(12),
      ],
    ],
    lon: [
      '',
      [
        Validators.required,
        Validators.max(-65),
        Validators.min(-83),
        Validators.maxLength(12),
      ],
    ],
    dir01: ['', Validators.required],
    dir02: ['', [Validators.required, Validators.max(1000), Validators.min(0)]],
    dir03: [''],
    dir04: [''],
    dir05: [''],
    dir06: ['', [Validators.required, Validators.max(1000), Validators.min(0)]],
    dir07: [''],
    dir08: [''],
  });

  procesar() {
    console.log(this.formUserLoca.value);
  }
}
