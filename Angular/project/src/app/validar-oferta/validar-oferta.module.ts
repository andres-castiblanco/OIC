import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidarOfertaRoutingModule } from './validar-oferta-routing.module';
import { ValOferComponent } from './pages/val-ofer/val-ofer.component';

@NgModule({
  declarations: [ValOferComponent],
  imports: [CommonModule, ValidarOfertaRoutingModule],
})
export class ValidarOfertaModule {}
