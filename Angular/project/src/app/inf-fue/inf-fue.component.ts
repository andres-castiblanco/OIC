import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-inf-fue',
  templateUrl: './inf-fue.component.html',
  styleUrls: ['./inf-fue.component.css'],
})
export class InfFueComponent {
  constructor(private fb: FormBuilder) {}

  get idoferta() {
    return this.formUserFue.get('idoferta') as FormControl;
  }

  get nom() {
    return this.formUserFue.get('nom') as FormControl;
  }

  get tel() {
    return this.formUserFue.get('tel') as FormControl;
  }

  get url() {
    return this.formUserFue.get('url') as FormControl;
  }

  get obs1() {
    return this.formUserFue.get('obs1') as FormControl;
  }

  get areresofer() {
    return this.formUserFue.get('areresofer') as FormControl;
  }

  get nomresofer() {
    return this.formUserFue.get('nomresofer') as FormControl;
  }

  get email() {
    return this.formUserFue.get('email') as FormControl;
  }

  get obs2() {
    return this.formUserFue.get('obs2') as FormControl;
  }

  formUserFue = this.fb.group({
    idoferta: [{ value: '123456789', disabled: true }, Validators.required],
    nom: ['', [Validators.required, Validators.maxLength(50)]],
    tel: ['', [Validators.required, Validators.max(100000000000000)]],
    url: ['', [Validators.required, Validators.maxLength(500)]],
    obs1: ['', [Validators.required, Validators.maxLength(4000)]],
    areresofer: ['', [Validators.required, Validators.maxLength(100)]],
    nomresofer: ['', [Validators.required, Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.maxLength(50)]],
    obs2: ['', [Validators.required, Validators.maxLength(1000)]],
  });

  procesar() {
    console.log(this.formUserFue.value);
  }
}
