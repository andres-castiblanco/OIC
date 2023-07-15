import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarOfertaRoutingModule } from './modificar-oferta-routing.module';
import { ModOferComponent } from './pages/mod-ofer/mod-ofer.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [ModOferComponent, FooterComponent, HeaderComponent, NavComponent],
  imports: [CommonModule, ModificarOfertaRoutingModule],
})
export class ModificarOfertaModule {}
