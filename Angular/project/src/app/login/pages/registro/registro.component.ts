import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  constructor(private fb: FormBuilder) {}

  get tiper() {
    return this.formRegistro.get('tiper') as FormControl;
  }

  get numiden() {
    return this.formRegistro.get('numiden') as FormControl;
  }

  get nom() {
    return this.formRegistro.get('nom') as FormControl;
  }

  get apl() {
    return this.formRegistro.get('apl') as FormControl;
  }

  get email() {
    return this.formRegistro.get('email') as FormControl;
  }

  get tel() {
    return this.formRegistro.get('tel') as FormControl;
  }

  get area() {
    return this.formRegistro.get('area') as FormControl;
  }

  get rol() {
    return this.formRegistro.get('rol') as FormControl;
  }

  get password() {
    return this.formRegistro.get('password') as FormControl;
  }

  get valpassword() {
    return this.formRegistro.get('valpassword') as FormControl;
  }

  formRegistro = this.fb.group({
    tiper: ['', [Validators.required]],
    numiden: [
      '',
      [Validators.required, Validators.max(100000000000000), Validators.min(1)],
    ],
    nom: ['', [Validators.required, Validators.maxLength(50)]],
    apl: ['', [Validators.required, Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.maxLength(50)]],
    tel: ['', [Validators.required, Validators.max(100000000000000)]],
    area: ['', [Validators.required]],
    rol: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.maxLength(50)]],
    valpassword: ['', [Validators.required, Validators.maxLength(50)]],
  });

  procesar() {
    console.log(this.formRegistro.value);
  }
}
