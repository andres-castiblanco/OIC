import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConsultarOfertaRoutingModule } from './consultar-oferta-routing.module';
import { ConOferComponent } from './pages/con-ofer/con-ofer.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import { DialognsComponent } from './components/dialogns/dialogns.component';

@NgModule({
  declarations: [
    ConOferComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    DialogsComponent,
    DialognsComponent,
  ],
  imports: [
    CommonModule,
    ConsultarOfertaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
  ],
})
export class ConsultarOfertaModule {}
