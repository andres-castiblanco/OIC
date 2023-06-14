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

  formUserFis = this.fb.group({
    idoferta: [{ value: '123456789', disabled: true }, Validators.required],
    atm2: [
      '',
      [Validators.required, Validators.max(1000000), Validators.min(0)],
    ],
    atha: [
      '',
      [Validators.required, Validators.max(1000000), Validators.min(0)],
    ],
  });

  procesar() {
    console.log(this.formUserFis.value);
  }
}
