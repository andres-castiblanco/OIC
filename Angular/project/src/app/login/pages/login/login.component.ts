import { Component } from '@angular/core';
import { loginLoginI } from '../../../modelos/login-login.interface';
import { resLoginLoginI } from '../../../modelos/res-login-login.interface';
import { ApiService } from '../../../servicios/api/api.service';
import { ValrelacionesService } from '../../../servicios/valrelaciones/valrelaciones.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: ApiService,
    private valrelacionesService: ValrelacionesService
  ) {}

  get email() {
    return this.formLogin.get('email') as FormControl;
  }

  get contrasena() {
    return this.formLogin.get('contrasena') as FormControl;
  }

  formLogin = this.fb.group({
    email: [
      '',
      [Validators.required, Validators.maxLength(50), Validators.email],
    ],
    contrasena: ['', [Validators.required, Validators.maxLength(50)]],
  });

  vistaErrorLogin: boolean = false;
  mensajeError: String = 'No se presentan errores.';

  ingresar(form: loginLoginI) {
    this.mensajeError = 'No se presentan errores.';
    this.vistaErrorLogin = false;
    this.api.loginLoginUsuario(form).subscribe((data) => {
      let resLogin: resLoginLoginI = data;
      if (resLogin.status === '200 OK') {
        localStorage.setItem('token', resLogin.token?.valueOf());
        this.router.navigate(['HomeOfertas']);
        this.valrelacionesService.setInfoPersona = data.dat_usua;
      } else {
        this.mensajeError = data.msj;
        this.vistaErrorLogin = true;
      }
    });
  }
}
