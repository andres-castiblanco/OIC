import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarOfertaRoutingModule } from './modificar-oferta-routing.module';
import { ModOferComponent } from './pages/mod-ofer/mod-ofer.component';

@NgModule({
  declarations: [ModOferComponent],
  imports: [CommonModule, ModificarOfertaRoutingModule],
})
export class ModificarOfertaModule {}
