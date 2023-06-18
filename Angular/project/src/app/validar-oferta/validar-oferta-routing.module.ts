import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValOferComponent } from './pages/val-ofer/val-ofer.component';

const routes: Routes = [
  {
    path: '',
    component: ValOferComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidarOfertaRoutingModule {}
