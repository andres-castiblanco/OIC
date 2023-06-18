import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeOfertasComponent } from './pages/home-ofertas/home-ofertas.component';

const routes: Routes = [
  {
    path: '',
    component: HomeOfertasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeOfertaRoutingModule {}
