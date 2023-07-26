import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdenPreComponent } from './crear-oferta/pages/iden-pre/iden-pre.component';
import { HomeOfertasComponent } from './home-oferta/pages/home-ofertas/home-ofertas.component';
import { DatGenComponent } from './crear-oferta/pages/dat-gen/dat-gen.component';
import { InfEcoComponent } from './crear-oferta/pages/inf-eco/inf-eco.component';
import { InfFisComponent } from './crear-oferta/pages/inf-fis/inf-fis.component';
import { InfFueComponent } from './crear-oferta/pages/inf-fue/inf-fue.component';
import { LocPreComponent } from './crear-oferta/pages/loc-pre/loc-pre.component';
import { ConOferComponent } from './consultar-oferta/pages/con-ofer/con-ofer.component';
import { ModOferComponent } from './modificar-oferta/pages/mod-ofer/mod-ofer.component';
import { ValOferComponent } from './validar-oferta/pages/val-ofer/val-ofer.component';
import { LoginComponent } from './login/pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'HomeOfertas',
    loadChildren: () =>
      import('src/app/home-oferta/home-oferta.module').then(
        (m) => m.HomeOfertaModule
      ),
  },
  {
    path: 'CrearOferta',
    loadChildren: () =>
      import('src/app/crear-oferta/crear-oferta.module').then(
        (m) => m.CrearOfertaModule
      ),
  },
  {
    path: 'ConOfer',
    loadChildren: () =>
      import('src/app/consultar-oferta/consultar-oferta.module').then(
        (m) => m.ConsultarOfertaModule
      ),
  },
  {
    path: 'ModOfer',
    loadChildren: () =>
      import('src/app/modificar-oferta/modificar-oferta.module').then(
        (m) => m.ModificarOfertaModule
      ),
  },
  {
    path: 'ValOfer',
    loadChildren: () =>
      import('src/app/validar-oferta/validar-oferta.module').then(
        (m) => m.ValidarOfertaModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('src/app/login/login.module').then((m) => m.LoginModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('src/app/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeOfertasComponent,
  IdenPreComponent,
  DatGenComponent,
  InfEcoComponent,
  InfFisComponent,
  InfFueComponent,
  LocPreComponent,
  ConOferComponent,
  ModOferComponent,
  ValOferComponent,
  LoginComponent,
];
