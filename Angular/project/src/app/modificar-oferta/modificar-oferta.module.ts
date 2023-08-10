import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarOfertaRoutingModule } from './modificar-oferta-routing.module';
import { ModOferComponent } from './pages/mod-ofer/mod-ofer.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
// import { LocPreValComponent } from './pages/loc-pre-val/loc-pre-val.component';
// import { InfFueValComponent } from './pages/inf-fue-val/inf-fue-val.component';
import { LocPreEditComponent } from './pages/loc-pre-edit/loc-pre-edit.component';
import { InfFueEditComponent } from './pages/inf-fue-edit/inf-fue-edit.component';
import { InfFisEditComponent } from './pages/inf-fis-edit/inf-fis-edit.component';
import { InfEcoEditComponent } from './pages/inf-eco-edit/inf-eco-edit.component';
import { IdenPreEditComponent } from './pages/iden-pre-edit/iden-pre-edit.component';
import { DatGenEditComponent } from './pages/dat-gen-edit/dat-gen-edit.component';

@NgModule({
  declarations: [
    // ModOferComponent,
    // FooterComponent,
    // HeaderComponent,
    // NavComponent,
    // LocPreValComponent,
    // InfFueValComponent,
    // LocPreEditComponent,
    // InfFueEditComponent,
    // InfFisEditComponent,
    // InfEcoEditComponent,
    // IdenPreEditComponent,
    // DatGenEditComponent,
  ],
  imports: [CommonModule, ModificarOfertaRoutingModule],
})
export class ModificarOfertaModule {}
