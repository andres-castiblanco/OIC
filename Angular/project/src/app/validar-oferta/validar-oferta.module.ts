import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidarOfertaRoutingModule } from './validar-oferta-routing.module';
import { ValOferComponent } from './pages/val-ofer/val-ofer.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [ValOferComponent, NavComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, ValidarOfertaRoutingModule],
})
export class ValidarOfertaModule {}
