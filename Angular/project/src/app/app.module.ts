import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IdenPreComponent } from './iden-pre/iden-pre.component';
import { LocPreComponent } from './loc-pre/loc-pre.component';
import { DatGenComponent } from './dat-gen/dat-gen.component';
import { InfFisComponent } from './inf-fis/inf-fis.component';
import { InfEcoComponent } from './inf-eco/inf-eco.component';
import { InfFueComponent } from './inf-fue/inf-fue.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeOfertasComponent } from './home-ofertas/home-ofertas.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConOferComponent } from './con-ofer/con-ofer.component';
import { ModOferComponent } from './mod-ofer/mod-ofer.component';
import { ValOferComponent } from './val-ofer/val-ofer.component';

const routes: Routes = [
  {
    path: 'HomeOfertas',
    component: HomeOfertasComponent,
  },
  {
    path: 'IdenPre',
    component: IdenPreComponent,
  },
  {
    path: 'LocPre',
    component: LocPreComponent,
  },
  {
    path: 'DatGen',
    component: DatGenComponent,
  },
  {
    path: 'InfFis',
    component: InfFisComponent,
  },
  {
    path: 'InfEco',
    component: InfEcoComponent,
  },
  {
    path: 'InfFue',
    component: InfFueComponent,
  },
  {
    path: 'ConPre',
    component: ConOferComponent,
  },
  {
    path: 'ModPre',
    component: ModOferComponent,
  },
  {
    path: 'ValPre',
    component: ValOferComponent,
  },
  {
    path: '**',
    component: HomeOfertasComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    IdenPreComponent,
    LocPreComponent,
    DatGenComponent,
    InfFisComponent,
    InfEcoComponent,
    InfFueComponent,
    HomeOfertasComponent,
    ConOferComponent,
    ModOferComponent,
    ValOferComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
