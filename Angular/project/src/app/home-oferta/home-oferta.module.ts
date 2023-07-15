import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeOfertaRoutingModule } from './home-oferta-routing.module';
import { HomeOfertasComponent } from './pages/home-ofertas/home-ofertas.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HomeOfertasComponent, NavComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, HomeOfertaRoutingModule],
})
export class HomeOfertaModule {}
