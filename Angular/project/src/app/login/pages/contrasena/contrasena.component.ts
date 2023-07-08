import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.component.html',
  styleUrls: ['./contrasena.component.css'],
})
export class ContrasenaComponent {
  constructor(private fb: FormBuilder) {}

  get email() {
    return this.formContrasena.get('email') as FormControl;
  }

  get password() {
    return this.formContrasena.get('password') as FormControl;
  }

  get valpassword() {
    return this.formContrasena.get('valpassword') as FormControl;
  }

  formContrasena = this.fb.group({
    email: ['', [Validators.required, Validators.maxLength(50)]],
    password: ['', [Validators.required, Validators.maxLength(50)]],
    valpassword: ['', [Validators.required, Validators.maxLength(50)]],
  });

  procesar() {
    console.log(this.formContrasena.value);
  }
}
