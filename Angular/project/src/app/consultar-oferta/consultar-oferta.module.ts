import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultarOfertaRoutingModule } from './consultar-oferta-routing.module';
import { ConOferComponent } from './pages/con-ofer/con-ofer.component';

@NgModule({
  declarations: [ConOferComponent],
  imports: [CommonModule, ConsultarOfertaRoutingModule],
})
export class ConsultarOfertaModule {}
