import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdenPreEditComponent } from './pages/iden-pre-edit/iden-pre-edit.component';
import { LocPreEditComponent } from './pages/loc-pre-edit/loc-pre-edit.component';
import { DatGenEditComponent } from './pages/dat-gen-edit/dat-gen-edit.component';
import { InfFisEditComponent } from './pages/inf-fis-edit/inf-fis-edit.component';
import { InfEcoEditComponent } from './pages/inf-eco-edit/inf-eco-edit.component';
import { InfFueEditComponent } from './pages/inf-fue-edit/inf-fue-edit.component';

const routes: Routes = [
  {
    path: 'IdenPre',
    component: IdenPreEditComponent,
  },
  {
    path: 'LocPre',
    component: LocPreEditComponent,
  },
  {
    path: 'DatGen',
    component: DatGenEditComponent,
  },
  {
    path: 'InfFis',
    component: InfFisEditComponent,
  },
  {
    path: 'InfEco',
    component: InfEcoEditComponent,
  },
  {
    path: 'InfFue',
    component: InfFueEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarOfertaRoutingModule {}
