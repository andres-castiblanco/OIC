import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { IdenPreComponent } from './crear-oferta/iden-pre/iden-pre.component';
// import { LocPreComponent } from './crear-oferta/loc-pre/loc-pre.component';
// import { DatGenComponent } from './crear-oferta/dat-gen/dat-gen.component';
// import { InfFisComponent } from './crear-oferta/inf-fis/inf-fis.component';
// import { InfEcoComponent } from './crear-oferta/inf-eco/inf-eco.component';
// import { InfFueComponent } from './crear-oferta/inf-fue/inf-fue.component';
// import { HomeOfertasComponent } from './home-oferta/home-ofertas/home-ofertas.component';
// import { ConOferComponent } from './consultar-oferta/con-ofer/con-ofer.component';
// import { ModOferComponent } from './modificar-oferta/mod-ofer/mod-ofer.component';
// import { ValOferComponent } from './validar-oferta/val-ofer/val-ofer.component';

const routes: Routes = [
  // {
  //   path: 'HomeOfertas',
  //   component: HomeOfertasComponent,
  // },
  // {
  //   path: 'IdenPre',
  //   component: IdenPreComponent,
  // },
  // {
  //   path: 'LocPre',
  //   component: LocPreComponent,
  // },
  // {
  //   path: 'DatGen',
  //   component: DatGenComponent,
  // },
  // {
  //   path: 'InfFis',
  //   component: InfFisComponent,
  // },
  // {
  //   path: 'InfEco',
  //   component: InfEcoComponent,
  // },
  // {
  //   path: 'InfFue',
  //   component: InfFueComponent,
  // },
  // {
  //   path: 'ConPre',
  //   component: ConOferComponent,
  // },
  // {
  //   path: 'ModPre',
  //   component: ModOferComponent,
  // },
  // {
  //   path: 'ValPre',
  //   component: ValOferComponent,
  // },
  // {
  //   path: '**',
  //   component: HomeOfertasComponent,
  // },
  //
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
    path: '**',
    loadChildren: () =>
      import('src/app/home-oferta/home-oferta.module').then(
        (m) => m.HomeOfertaModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
