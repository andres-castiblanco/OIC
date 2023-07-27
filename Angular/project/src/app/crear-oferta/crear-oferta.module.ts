import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CrearOfertaRoutingModule } from './crear-oferta-routing.module';
import { IdenPreComponent } from './pages/iden-pre/iden-pre.component';
import { LocPreComponent } from './pages/loc-pre/loc-pre.component';
import { DatGenComponent } from './pages/dat-gen/dat-gen.component';
import { InfFisComponent } from './pages/inf-fis/inf-fis.component';
import { InfEcoComponent } from './pages/inf-eco/inf-eco.component';
import { InfFueComponent } from './pages/inf-fue/inf-fue.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { MapaComponent } from './components/mapa/mapa.component';

@NgModule({
  declarations: [
    IdenPreComponent,
    LocPreComponent,
    DatGenComponent,
    InfFisComponent,
    InfEcoComponent,
    InfFueComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    MapaComponent,
  ],
  imports: [ 
    CommonModule,
    CrearOfertaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CrearOfertaModule {}
