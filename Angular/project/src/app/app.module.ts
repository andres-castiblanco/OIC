import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IdenPreComponent } from './iden-pre/iden-pre.component';
import { LocPreComponent } from './loc-pre/loc-pre.component';
import { DatGenComponent } from './dat-gen/dat-gen.component';
import { InfFisComponent } from './inf-fis/inf-fis.component';
import { InfEcoComponent } from './inf-eco/inf-eco.component';
import { InfFueComponent } from './inf-fue/inf-fue.component';


@NgModule({
  declarations: [
    AppComponent,
    IdenPreComponent,
    LocPreComponent,
    DatGenComponent,
    InfFisComponent,
    InfEcoComponent,
    InfFueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
