import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { loginContraI } from '../../../modelos/login-contra.interface';
import { resLoginContraI } from '../../../modelos/res-logis-contra.interface';

import { ApiService } from '../../../servicios/api/api.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.component.html',
  styleUrls: ['./contrasena.component.css'],
})
export class ContrasenaComponent {
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {}

  get email() {
    return this.formContrasena.get('email') as FormControl;
  }

  // get password() {
  //   return this.formContrasena.get('password') as FormControl;
  // }

  // get valpassword() {
  //   return this.formContrasena.get('valpassword') as FormControl;
  // }

  formContrasena = this.fb.group({
    email: ['', [Validators.required, Validators.maxLength(50)]],
    // password: ['', [Validators.required, Validators.maxLength(50)]],
    // valpassword: ['', [Validators.required, Validators.maxLength(50)]],
  });

  recuperar(form: loginContraI) {
    this.api.loginContraUsuario(form).subscribe((data) => {
      let rescontra: resLoginContraI = data;
      if (rescontra.status === '200 OK') {
        console.log(data.msj);
        this.router.navigate(['Login']);
      } else {
        console.log(data.msj);
      }
    });
  }
}
