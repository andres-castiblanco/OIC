import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModOferComponent } from './pages/mod-ofer/mod-ofer.component';

const routes: Routes = [
  {
    path: '',
    component: ModOferComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarOfertaRoutingModule {}
