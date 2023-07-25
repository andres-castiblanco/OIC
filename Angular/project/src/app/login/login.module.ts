import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ContrasenaComponent } from './pages/contrasena/contrasena.component';
import { CamContraComponent } from './pages/cam-contra/cam-contra.component';

@NgModule({
  declarations: [LoginComponent, RegistroComponent, ContrasenaComponent, CamContraComponent],
  imports: [CommonModule, LoginRoutingModule, FormsModule, ReactiveFormsModule],
})
export class LoginModule {}
