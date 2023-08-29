import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatGenValComponent } from './pages/dat-gen-val/dat-gen-val.component';
import { IdenPreValComponent } from './pages/iden-pre-val/iden-pre-val.component';
import { InfEcoValComponent } from './pages/inf-eco-val/inf-eco-val.component';
import { InfFisValComponent } from './pages/inf-fis-val/inf-fis-val.component';
import { InfFueValComponent } from './pages/inf-fue-val/inf-fue-val.component';
import { LocPreValComponent } from './pages/loc-pre-val/loc-pre-val.component';

const routes: Routes = [
  {
    path: 'IdenPre',
    component: IdenPreValComponent,
  },
  {
    path: 'LocPre',
    component: LocPreValComponent,
  },
  {
    path: 'DatGen',
    component: DatGenValComponent,
  },
  {
    path: 'InfFis',
    component: InfFisValComponent,
  },
  {
    path: 'InfEco',
    component: InfEcoValComponent,
  },
  {
    path: 'InfFue',
    component: InfFueValComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidarOfertaRoutingModule {}
