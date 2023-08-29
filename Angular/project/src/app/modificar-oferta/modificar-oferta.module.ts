import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModificarOfertaRoutingModule } from './modificar-oferta-routing.module';
import { IdenPreEditComponent } from './pages/iden-pre-edit/iden-pre-edit.component';
import { LocPreEditComponent } from './pages/loc-pre-edit/loc-pre-edit.component';
import { DatGenEditComponent } from './pages/dat-gen-edit/dat-gen-edit.component';
import { InfFisEditComponent } from './pages/inf-fis-edit/inf-fis-edit.component';
import { InfEcoEditComponent } from './pages/inf-eco-edit/inf-eco-edit.component';
import { InfFueEditComponent } from './pages/inf-fue-edit/inf-fue-edit.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { DialogsComponent } from './components/dialogs/dialogs.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavComponent,
    IdenPreEditComponent,
    LocPreEditComponent,
    DatGenEditComponent,
    InfFisEditComponent,
    InfEcoEditComponent,
    InfFueEditComponent,
    DialogsComponent,
  ],
  imports: [
    CommonModule,
    ModificarOfertaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
  ],
})
export class ModificarOfertaModule {}
