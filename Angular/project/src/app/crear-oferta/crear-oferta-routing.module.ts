import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdenPreComponent } from './pages/iden-pre/iden-pre.component';
import { LocPreComponent } from './pages/loc-pre/loc-pre.component';
import { DatGenComponent } from './pages/dat-gen/dat-gen.component';
import { InfFisComponent } from './pages/inf-fis/inf-fis.component';
import { InfEcoComponent } from './pages/inf-eco/inf-eco.component';
import { InfFueComponent } from './pages/inf-fue/inf-fue.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearOfertaRoutingModule {}
