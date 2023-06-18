import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConOferComponent } from './pages/con-ofer/con-ofer.component';

const routes: Routes = [
  {
    path: '',
    component: ConOferComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarOfertaRoutingModule {}
