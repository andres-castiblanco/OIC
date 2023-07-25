import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

import { resLoginContraI } from '../../../modelos/res-logis-contra.interface';

import { ApiService } from '../../../servicios/api/api.service';

import { Router } from '@angular/router';
import { loginCambContraI } from 'src/app/modelos/login-camb-contra.interface';

@Component({
  selector: 'app-cam-contra',
  templateUrl: './cam-contra.component.html',
  styleUrls: ['./cam-contra.component.css'],
})
export class CamContraComponent {
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {}

  get email() {
    return this.formCamContrasena.get('email') as FormControl;
  }

  get contractual() {
    return this.formCamContrasena.get('contractual') as FormControl;
  }

  get contranueva() {
    return this.formCamContrasena.get('contranueva') as FormControl;
  }

  get valcontranueva() {
    return this.formCamContrasena.get('valcontranueva') as FormControl;
  }

  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null!;
      }
      const valid = regex.test(control.value);
      return valid ? null! : error;
    };
  }

  static passwordMatchValidator(control: AbstractControl) {
    const contranueva: string = control.get('contranueva')?.value;
    const valcontranueva: string = control.get('valcontranueva')?.value;
    if (contranueva !== valcontranueva) {
      control.get('valcontranueva')?.setErrors({ NoPassswordMatch: true });
    }
  }

  formCamContrasena = this.fb.group(
    {
      email: [
        '',
        [Validators.required, Validators.maxLength(50), Validators.email],
      ],
      contractual: ['', [Validators.required, Validators.maxLength(50)]],
      contranueva: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(8),
          CamContraComponent.patternValidator(/\d/, { hasNumber: true }),
          CamContraComponent.patternValidator(/[A-Z]/, {
            hasCapitalCase: true,
          }),
          CamContraComponent.patternValidator(/[a-z]/, { hasSmallCase: true }),
          CamContraComponent.patternValidator(
            /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
            { hasSpecialCharacters: true }
          ),
        ],
      ],
      valcontranueva: ['', [Validators.required, Validators.maxLength(50)]],
    },
    {
      validator: CamContraComponent.passwordMatchValidator,
    }
  );

  cambiocontrasena: loginCambContraI = {
    email: undefined,
    contractual: undefined,
    contranueva: undefined,
  };

  recuperar() {
    this.cambiocontrasena.email = this.formCamContrasena.value.email?.valueOf();
    this.cambiocontrasena.contractual =
      this.formCamContrasena.value.contractual?.valueOf();
    this.cambiocontrasena.contranueva =
      this.formCamContrasena.value.contranueva?.valueOf();

    this.api.loginCambContraUsuario(this.cambiocontrasena).subscribe((data) => {
      let rescamcontra: resLoginContraI = data;
      if (rescamcontra.status === '200 OK') {
        console.log(data.msj);
        this.router.navigate(['Login']);
      } else {
        console.log(data.msj);
      }
    });
  }
}
