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
