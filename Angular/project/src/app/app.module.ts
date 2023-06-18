import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

// import { IdenPreComponent } from './crear-oferta/iden-pre/iden-pre.component';
// import { LocPreComponent } from './crear-oferta/loc-pre/loc-pre.component';
// import { DatGenComponent } from './crear-oferta/dat-gen/dat-gen.component';
// import { InfFisComponent } from './crear-oferta/inf-fis/inf-fis.component';
// import { InfEcoComponent } from './crear-oferta/inf-eco/inf-eco.component';
// import { InfFueComponent } from './crear-oferta/inf-fue/inf-fue.component';
// import { HomeOfertasComponent } from './home-oferta/home-ofertas/home-ofertas.component';
// import { ConOferComponent } from './consultar-oferta/con-ofer/con-ofer.component';
// import { ModOferComponent } from './modificar-oferta/mod-ofer/mod-ofer.component';
// import { ValOferComponent } from './validar-oferta/val-ofer/val-ofer.component';

@NgModule({
  declarations: [
    AppComponent,
    // IdenPreComponent,
    // LocPreComponent,
    // DatGenComponent,
    // InfFisComponent,
    // InfEcoComponent,
    // InfFueComponent,
    // HomeOfertasComponent,
    // ConOferComponent,
    // ModOferComponent,
    // ValOferComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
