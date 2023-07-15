import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultarOfertaRoutingModule } from './consultar-oferta-routing.module';
import { ConOferComponent } from './pages/con-ofer/con-ofer.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [ConOferComponent, FooterComponent, HeaderComponent, NavComponent],
  imports: [CommonModule, ConsultarOfertaRoutingModule],
})
export class ConsultarOfertaModule {}
