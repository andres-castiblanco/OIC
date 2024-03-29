import { Component } from '@angular/core';
import { loginRegistroI } from '../../../modelos/login-registro.interface';
import { resLoginRegistroI } from '../../../modelos/res-login-registro.interface';
import { ApiService } from '../../../servicios/api/api.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  PatternValidator,
  ValidationErrors,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {}

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

  get contrasena() {
    return this.formRegistro.get('contrasena') as FormControl;
  }

  get valcontrasena() {
    return this.formRegistro.get('valcontrasena') as FormControl;
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
    const contrasena: string = control.get('contrasena')?.value;
    const valcontrasena: string = control.get('valcontrasena')?.value;
    if (contrasena !== valcontrasena) {
      control.get('valcontrasena')?.setErrors({ NoPassswordMatch: true });
    }
  }

  formRegistro = this.fb.group(
    {
      tiper: ['', [Validators.required]],
      numiden: [
        '',
        [
          Validators.required,
          Validators.max(100000000000000),
          Validators.min(1),
        ],
      ],
      nom: ['', [Validators.required, Validators.maxLength(50)]],
      apl: ['', [Validators.required, Validators.maxLength(50)]],
      email: [
        '',
        [Validators.required, Validators.maxLength(50), Validators.email],
      ],
      tel: ['', [Validators.required, Validators.max(100000000000000)]],
      area: ['', [Validators.required, Validators.maxLength(50)]],
      rol: ['', [Validators.required]],
      contrasena: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(8),
          RegistroComponent.patternValidator(/\d/, { hasNumber: true }),
          RegistroComponent.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
          RegistroComponent.patternValidator(/[a-z]/, { hasSmallCase: true }),
          RegistroComponent.patternValidator(
            /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
            { hasSpecialCharacters: true }
          ),
        ],
      ],
      valcontrasena: ['', [Validators.required, Validators.maxLength(50)]],
    },
    {
      validator: RegistroComponent.passwordMatchValidator,
    }
  );

  datosRegistro: loginRegistroI = {
    ti_persona: undefined,
    ni_persona: undefined,
    nombres: undefined,
    apellidos: undefined,
    email: undefined,
    contrasena: undefined,
    telefono: undefined,
    area: undefined,
    rol: undefined,
  };

  registrar() {
    this.datosRegistro.ti_persona = this.formRegistro.value.tiper?.valueOf();
    this.datosRegistro.ni_persona = Number(
      this.formRegistro.value.numiden?.valueOf()
    );
    this.datosRegistro.nombres = this.formRegistro.value.nom?.valueOf();
    this.datosRegistro.apellidos = this.formRegistro.value.apl?.valueOf();
    this.datosRegistro.email = this.formRegistro.value.email?.valueOf();
    this.datosRegistro.contrasena =
      this.formRegistro.value.contrasena?.valueOf();
    this.datosRegistro.telefono = Number(
      this.formRegistro.value.tel?.valueOf()
    );
    this.datosRegistro.area = this.formRegistro.value.area?.valueOf();
    this.datosRegistro.rol = Number(this.formRegistro.value.rol?.valueOf());

    this.api.loginRegistroUsuario(this.datosRegistro).subscribe((data) => {
      let resRegistro: resLoginRegistroI = data;
      if (resRegistro.status === '200 OK') {
        console.log(resRegistro.msj);
        this.router.navigate(['Login']);
      } else {
        console.log(resRegistro.msj);
      }
    });
  }
}
