import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ContrasenaComponent } from './pages/contrasena/contrasena.component';
import { CamContraComponent } from './pages/cam-contra/cam-contra.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'contrasena',
    component: ContrasenaComponent,
  },
  {
    path: 'cambiocontrasena',
    component: CamContraComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
