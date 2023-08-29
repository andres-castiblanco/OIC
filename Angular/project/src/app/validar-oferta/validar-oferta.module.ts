import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ValidarOfertaRoutingModule } from './validar-oferta-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DatGenValComponent } from './pages/dat-gen-val/dat-gen-val.component';
import { IdenPreValComponent } from './pages/iden-pre-val/iden-pre-val.component';
import { InfEcoValComponent } from './pages/inf-eco-val/inf-eco-val.component';
import { InfFisValComponent } from './pages/inf-fis-val/inf-fis-val.component';
import { InfFueValComponent } from './pages/inf-fue-val/inf-fue-val.component';
import { LocPreValComponent } from './pages/loc-pre-val/loc-pre-val.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogsComponent } from './components/dialogs/dialogs.component';

@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    FooterComponent,
    DatGenValComponent,
    IdenPreValComponent,
    InfEcoValComponent,
    InfFisValComponent,
    InfFueValComponent,
    LocPreValComponent,
    DialogsComponent,
  ],
  imports: [
    CommonModule,
    ValidarOfertaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
  ],
})
export class ValidarOfertaModule {}
