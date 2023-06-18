import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeOfertaRoutingModule } from './home-oferta-routing.module';
import { HomeOfertasComponent } from './pages/home-ofertas/home-ofertas.component';

@NgModule({
  declarations: [HomeOfertasComponent],
  imports: [CommonModule, HomeOfertaRoutingModule],
})
export class HomeOfertaModule {}
