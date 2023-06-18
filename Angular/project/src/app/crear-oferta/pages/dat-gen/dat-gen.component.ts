import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-dat-gen',
  templateUrl: './dat-gen.component.html',
  styleUrls: ['./dat-gen.component.css'],
})
export class DatGenComponent {
  constructor(private fb: FormBuilder) {}

  get idoferta() {
    return this.formUserGen.get('idoferta') as FormControl;
  }

  get dertip() {
    return this.formUserGen.get('dertip') as FormControl;
  }

  get tipinmb() {
    return this.formUserGen.get('tipinmb') as FormControl;
  }

  get valanex() {
    return this.formUserGen.get('valanex') as FormControl;
  }

  get feccapofer() {
    return this.formUserGen.get('feccapofer') as FormControl;
  }

  get tiemofemer() {
    return this.formUserGen.get('tiemofemer') as FormControl;
  }

  get proinmb() {
    return this.formUserGen.get('proinmb') as FormControl;
  }

  get desproy() {
    return this.formUserGen.get('desproy') as FormControl;
  }

  formUserGen = this.fb.group({
    idoferta: [{ value: '123456789', disabled: true }, Validators.required],
    dertip: ['', Validators.required],
    tipinmb: ['', Validators.required],
    valanex: ['', Validators.required],
    feccapofer: ['', Validators.required],
    tiemofemer: ['', Validators.required],
    proinmb: ['', Validators.required],
    desproy: ['', [Validators.required, Validators.maxLength(500)]],
  });

  procesar() {
    console.log(this.formUserGen.value);
  }
}
