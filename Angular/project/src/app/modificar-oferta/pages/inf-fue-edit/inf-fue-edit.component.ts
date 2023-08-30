import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';

import { ApiService } from '../../../servicios/api/api.service';
import { EditarService } from '../../../servicios/editar/editar.service';

import { infoFuenteI } from '../../../modelos/crear-oferta-inf-fuente.interface';
import { resCearOfer } from '../../../modelos/res-crear-ofer.interface';
import { infoAdminI } from 'src/app/modelos/crear-oferta-inf-admin.interface';
import { infoPerI } from 'src/app/modelos/crear-oferta-personas.interface';
import { resLoginLoginI } from 'src/app/modelos/res-login-login.interface';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from '../../components/dialogs/dialogs.component';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ValidarOfertaModule } from '../../../validar-oferta/validar-oferta.module';

@Component({
  selector: 'app-inf-fue-edit',
  templateUrl: './inf-fue-edit.component.html',
  styleUrls: ['./inf-fue-edit.component.css'],
})
export class InfFueEditComponent {
  public archivos: File[] = [];
  percentDone: number = 0;
  loading: boolean = false;
  percentDoneDocs: number = 0;
  loadingDocs: boolean = false;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public editar: EditarService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  get id_oferta() {
    return this.formUserFue.get('id_oferta') as FormControl;
  }

  get nom() {
    return this.formUserFue.get('nom') as FormControl;
  }

  get tel() {
    return this.formUserFue.get('tel') as FormControl;
  }

  get url() {
    return this.formUserFue.get('url') as FormControl;
  }

  get obs1() {
    return this.formUserFue.get('obs1') as FormControl;
  }

  get nomcapofer() {
    return this.formUserFue.get('nomcapofer') as FormControl;
  }

  get apecapofer() {
    return this.formUserFue.get('apecapofer') as FormControl;
  }

  get tipercap() {
    return this.formUserFue.get('tipercap') as FormControl;
  }

  get numidencap() {
    return this.formUserFue.get('numidencap') as FormControl;
  }

  get emailcap() {
    return this.formUserFue.get('emailcap') as FormControl;
  }

  get areresofer() {
    return this.formUserFue.get('areresofer') as FormControl;
  }

  get obs2() {
    return this.formUserFue.get('obs2') as FormControl;
  }

  get nomveriofer() {
    return this.formUserFue.get('nomveriofer') as FormControl;
  }

  get apeveriofer() {
    return this.formUserFue.get('apeveriofer') as FormControl;
  }

  get tiperver() {
    return this.formUserFue.get('tiperver') as FormControl;
  }

  get numperver() {
    return this.formUserFue.get('numperver') as FormControl;
  }

  get emailveri() {
    return this.formUserFue.get('emailveri') as FormControl;
  }

  get areverofer() {
    return this.formUserFue.get('areverofer') as FormControl;
  }

  get obs3() {
    return this.formUserFue.get('obs3') as FormControl;
  }

  static valoresValidacionesInfoFu(control: AbstractControl) {
    const telefono: number = control.get('tel')?.value;
    const url: string = control.get('url')?.value;
    const regexp = new RegExp('^https?://[w-]+(.[w-]+)+[/#?]?.*$');

    if (
      (telefono === undefined ||
        telefono === null ||
        Number.isNaN(telefono) ||
        telefono <= 0 ||
        telefono > 1000000000000) &&
      (url === undefined || url === null || url === '' || !regexp.test(url))
    ) {
      control.get('tel')?.setErrors({ valoresVacios: true });
      control.get('url')?.setErrors({ valoresVacios: true });
    } else {
      control.get('tel')?.setErrors(null);
      control.get('url')?.setErrors(null);
    }
  }

  formUserFue = this.fb.group(
    {
      id_oferta: [
        {
          value: this.editar.idenPredio.id_oferta,
          disabled: true,
        },
        Validators.required,
      ],
      nom: [
        this.editar.infoFuente.nombre_oferente,
        [Validators.required, Validators.maxLength(50)],
      ],
      tel: [
        this.editar.infoFuente.numero_contacto,
        [Validators.max(100000000000000)],
      ],
      url: [this.editar.infoFuente.url, [Validators.maxLength(500)]],
      obs1: [
        this.editar.infoFuente.observaciones,
        [Validators.required, Validators.maxLength(4000)],
      ],

      nomcapofer: [
        {
          value: this.editar.infoPer.nombres,
          disabled: true,
        },
        [Validators.required, Validators.maxLength(50)],
      ],
      apecapofer: [
        {
          value: this.editar.infoPer.apellidos,
          disabled: true,
        },
        [Validators.required, Validators.maxLength(50)],
      ],
      tipercap: [
        {
          value: this.editar.infoPer.ti_persona,
          disabled: true,
        },
        Validators.required,
      ],
      numidencap: [
        {
          value: this.editar.infoPer.ni_persona,
          disabled: true,
        },
        [Validators.required, Validators.max(100000000000), Validators.min(1)],
      ],
      emailcap: [
        {
          value: this.editar.infoPer.email,
          disabled: true,
        },
        [Validators.required, Validators.maxLength(50)],
      ],
      areresofer: [
        {
          value: this.editar.infoPer.area,
          disabled: true,
        },
        [Validators.required, Validators.maxLength(100)],
      ],

      nomveriofer: [
        {
          value: this.editar.infoPerVeri.nombres,
          disabled: true,
        },
        [Validators.maxLength(50)],
      ],
      apeveriofer: [
        {
          value: this.editar.infoPerVeri.apellidos,
          disabled: true,
        },
        ,
        [Validators.maxLength(50)],
      ],
      tiperver: [
        {
          value: this.editar.infoAdmin.ti_persona_verifica,
          disabled: true,
        },
      ],
      numperver: [
        {
          value: this.editar.infoAdmin.ni_persona_verifica,
          disabled: true,
        },
        ,
        [Validators.max(100000000000000), Validators.min(1)],
      ],
      emailveri: [
        this.editar.infoAdmin.email_persona_verifica,
        [Validators.maxLength(50)],
      ],
      areverofer: [
        {
          value: this.editar.infoAdmin.area_persona_verifica,
          disabled: true,
        },
        [Validators.maxLength(100)],
      ],
      obs3: [
        {
          value: this.editar.idenPredio.obs_verifica,
          disabled: true,
        },
        ,
        [Validators.maxLength(1000)],
      ],
    },
    {
      validator: [InfFueEditComponent.valoresValidacionesInfoFu],
    }
  );

  objInfoFuente: infoFuenteI = {
    id_oferta: undefined,
    nombre_oferente: undefined,
    numero_contacto: undefined,
    url: undefined,
    enlace_interno_foto_predio: undefined,
    enlace_documentos: undefined,
    observaciones: undefined,
  };

  objInfoAdmin: infoAdminI = {
    id_oferta: undefined,
    ti_persona_captura: undefined,
    ni_persona_captura: undefined,
    email_persona_captura: undefined,
    area_persona_captura: undefined,
    ti_persona_verifica: undefined,
    ni_persona_verifica: undefined,
    email_persona_verifica: undefined,
    area_persona_verifica: undefined,
  };

  objPerVeri: infoPerI = {
    ti_persona: undefined,
    ni_persona: undefined,
    nombres: undefined,
    apellidos: undefined,
    email: undefined,
    telefono: undefined,
    area: undefined,
    rol: undefined,
  };

  resInfoFuente: resCearOfer = {
    id_oferta: null,
    status: null,
    token: String(localStorage.getItem('token')),
  };

  // envioFormVistaBack: boolean = false;
  // noVistaSiguienteBoton: boolean = true;

  procesar() {
    this.resInfoFuente.token = String(localStorage.getItem('token'));
    this.objInfoFuente.id_oferta = this.editar.idenPredio.id_oferta?.valueOf();
    this.objInfoFuente.nombre_oferente = this.formUserFue.value.nom?.valueOf();
    this.objInfoFuente.numero_contacto =
      Number.isNaN(Number(this.formUserFue.value.tel?.valueOf())) ||
      String(this.formUserFue.value.tel) == ''
        ? undefined
        : Number(this.formUserFue.value.tel?.valueOf());
    this.objInfoFuente.url =
      this.formUserFue.value.url == ''
        ? undefined
        : this.formUserFue.value.url?.valueOf();
    this.objInfoFuente.enlace_interno_foto_predio = true;
    this.objInfoFuente.enlace_documentos = true;
    this.objInfoFuente.observaciones = this.formUserFue.value.obs1?.valueOf();

    this.objInfoAdmin.id_oferta = this.editar.idenPredio.id_oferta?.valueOf();
    this.objInfoAdmin.ti_persona_captura =
      this.editar.infoPer.ti_persona?.valueOf();
    this.objInfoAdmin.ni_persona_captura =
      this.editar.infoPer.ni_persona?.valueOf();
    this.objInfoAdmin.email_persona_captura =
      this.editar.infoPer.email?.valueOf();
    this.objInfoAdmin.area_persona_captura =
      this.editar.infoPer.area?.valueOf();

    this.objPerVeri.email = this.formUserFue.value.emailveri?.valueOf();

    if (
      this.editar.idenPredio.id_oferta !== undefined &&
      (JSON.stringify(this.editar.infoFuente) !==
        JSON.stringify(this.objInfoFuente) ||
        JSON.stringify(this.editar.infoAdmin) !==
          JSON.stringify(this.objInfoAdmin)) &&
      (this.objPerVeri.email === undefined ||
        this.objPerVeri.email === null ||
        this.objPerVeri.email === '')
    ) {
      this.api
        .capOferRestInfoFuenteOferta(
          this.objInfoFuente,
          this.resInfoFuente.token
        )
        .subscribe((resInfoFuente) => {
          if (resInfoFuente.status === '200 OK') {
            localStorage.setItem('token', resInfoFuente.token?.valueOf());
            this.editar.setInfoFuentePredio = this.objInfoFuente;

            let dialogRef = this.dialog.open(DialogsComponent, {
              width: '350px',
              data: `El valor del id oferta se inicializó y fue asignado como: ${this.editar.idenPredio.id_oferta}.
              Se evidencia actualizaciones por lo tanto se actualizan los datos de información fuente de la oferta.`,
            });
            dialogRef.afterClosed().subscribe((res) => {
              if (res) {
                console.warn(
                  `El valor de id_oferta  se inicializó y fue asignado su valor es de: ${this.editar.idenPredio.id_oferta}. Se evidencia actualizaciones por lo tanto se actualizan los datos.`
                );
              }
            });

            this.resInfoFuente.token = String(localStorage.getItem('token'));

            this.api
              .capOferRestInfoAdminOferta(
                this.objInfoAdmin,
                this.resInfoFuente.token
              )
              .subscribe((resInfoAdmin) => {
                if (resInfoAdmin.status === '200 OK') {
                  localStorage.setItem('token', resInfoAdmin.token?.valueOf());
                  this.editar.setInfoAdminePredio = this.objInfoAdmin;
                  this.editar.idenPredio.estado_oferta =
                    '1_POR_ASIGNAR_A_REVISION';
                  // this.envioFormVistaBack = true;
                  // this.noVistaSiguienteBoton =
                  //   this.editar.idenPredio.id_oferta !==
                  //     undefined && this.envioFormVistaBack
                  //     ? false
                  //     : true;

                  let dialogRef = this.dialog.open(DialogsComponent, {
                    width: '350px',
                    data: `El valor del id oferta se inicializó y fue asignado como: ${this.editar.idenPredio.id_oferta}.
                    Se evidencia actualizaciones por lo tanto se actualizan los datos de información administrativa.`,
                  });
                  dialogRef.afterClosed().subscribe((res) => {
                    if (res) {
                      console.warn(
                        `Se asignaron los valores administrativos de la persona que captura la oferta ${this.editar.idenPredio.id_oferta}.`
                      );
                    }
                  });
                } else {
                  let dialogRef = this.dialog.open(DialogsComponent, {
                    width: '350px',
                    data: `Error para la oferta: ${this.editar.idenPredio.id_oferta}. No se guardaron los cambios a los datos.`,
                  });
                  dialogRef.afterClosed().subscribe((res) => {
                    if (res) {
                      console.warn(
                        `Error no status '200 OK' para la oferta: ${this.editar.idenPredio.id_oferta}. No se actualizan los datos para la información administrativa de la oferta.`
                      );
                    }
                  });
                }
              });
          } else {
            let dialogRef = this.dialog.open(DialogsComponent, {
              width: '350px',
              data: `Error para la oferta: ${this.editar.idenPredio.id_oferta}. No se guardaron los cambios a los datos.`,
            });
            dialogRef.afterClosed().subscribe((res) => {
              if (res) {
                console.warn(
                  `Error no status '200 OK' para la oferta: ${this.editar.idenPredio.id_oferta}. No se actualizan los datos para la información fuente de la oferta.`
                );
              }
            });
          }
        });
    } else if (
      this.editar.idenPredio.id_oferta !== undefined &&
      (JSON.stringify(this.editar.infoFuente) !==
        JSON.stringify(this.objInfoFuente) ||
        JSON.stringify(this.editar.infoAdmin) !==
          JSON.stringify(this.objInfoAdmin)) &&
      this.objPerVeri.email !== undefined &&
      this.objPerVeri.email !== null &&
      this.objPerVeri.email !== ''
    ) {
      this.api
        .veriOfertaPersonaVerifica(
          this.objPerVeri.email,
          this.resInfoFuente.token
        )
        .subscribe((resPerVerifica) => {
          if (resPerVerifica.status === '200 OK') {
            localStorage.setItem('token', resPerVerifica.token?.valueOf());
            this.editar.setInfoPersonaVeri = resPerVerifica.dat_usua;

            if (
              this.editar.infoPerVeri.rol === 2 ||
              this.editar.infoPerVeri.rol === 1
            ) {
              this.objInfoAdmin.ni_persona_verifica =
                this.editar.infoPerVeri.ni_persona;
              this.objInfoAdmin.ti_persona_verifica =
                this.editar.infoPerVeri.ti_persona;
              this.objInfoAdmin.email_persona_verifica =
                this.editar.infoPerVeri.email;
              this.objInfoAdmin.area_persona_verifica =
                this.editar.infoPerVeri.area;

              this.editar.setInfoAdminePredio = this.objInfoAdmin;
              this.editar.idenPredio.estado_oferta = '2_ASIGNADO_PARA_REVISION';

              this.formUserFue.controls['nomveriofer'].setValue(
                String(this.editar.infoPerVeri.nombres)
              );
              this.formUserFue.controls['apeveriofer'].setValue(
                String(this.editar.infoPerVeri.apellidos)
              );
              this.formUserFue.controls['numperver'].setValue(
                String(this.objInfoAdmin.ni_persona_verifica)
              );
              this.formUserFue.controls['tiperver'].setValue(
                String(this.objInfoAdmin.ti_persona_verifica)
              );
              this.formUserFue.controls['emailveri'].setValue(
                String(this.objInfoAdmin.email_persona_verifica)
              );
              this.formUserFue.controls['areverofer'].setValue(
                String(this.objInfoAdmin.area_persona_verifica)
              );

              this.resInfoFuente.token = String(localStorage.getItem('token'));

              this.api
                .capOferRestInfoFuenteOferta(
                  this.objInfoFuente,
                  this.resInfoFuente.token
                )
                .subscribe((resInfoFuente) => {
                  if (resInfoFuente.status === '200 OK') {
                    localStorage.setItem(
                      'token',
                      resInfoFuente.token?.valueOf()
                    );

                    this.editar.setInfoFuentePredio = this.objInfoFuente;

                    let dialogRef = this.dialog.open(DialogsComponent, {
                      width: '350px',
                      data: `El valor del id oferta se inicializó y fue asignado como: ${this.editar.idenPredio.id_oferta}.
                        Se evidencia actualizaciones por lo tanto se actualizan los datos de información fuente de la oferta.`,
                    });
                    dialogRef.afterClosed().subscribe((res) => {
                      if (res) {
                        console.warn(
                          `El valor de id_oferta  se inicializó y fue asignado su valor es de: ${this.editar.idenPredio.id_oferta}. Se evidencia actualizaciones por lo tanto se actualizan los datos.`
                        );
                      }
                    });

                    this.resInfoFuente.token = String(
                      localStorage.getItem('token')
                    );

                    this.api
                      .capOferRestInfoAdminOferta(
                        this.objInfoAdmin,
                        this.resInfoFuente.token
                      )
                      .subscribe((resInfoAdmin) => {
                        if (resInfoAdmin.status === '200 OK') {
                          localStorage.setItem(
                            'token',
                            resInfoAdmin.token?.valueOf()
                          );

                          this.editar.setInfoAdminePredio = this.objInfoAdmin;
                          // this.envioFormVistaBack = true;
                          // this.noVistaSiguienteBoton =
                          //   this.editar.idenPredio.id_oferta !==
                          //     undefined && this.envioFormVistaBack
                          //     ? false
                          //     : true;
                          // this.editar.habilitarVista(
                          //   'noEnvioTerminar',
                          //   this.noVistaSiguienteBoton
                          // );

                          let dialogRef = this.dialog.open(DialogsComponent, {
                            width: '350px',
                            data: `Se asignaron los valores administrativos de la persona que captura la oferta ${this.editar.idenPredio.id_oferta}.`,
                          });
                          dialogRef.afterClosed().subscribe((res) => {
                            if (res) {
                              console.warn(
                                `Se asignaron los valores administrativos de la persona que captura la oferta ${this.editar.idenPredio.id_oferta}.`
                              );
                            }
                          });
                        } else {
                          let dialogRef = this.dialog.open(DialogsComponent, {
                            width: '350px',
                            data: `Error para la oferta: ${this.editar.idenPredio.id_oferta}. No se guardaron los cambios a los datos para la información administrativa de la oferta.`,
                          });
                          dialogRef.afterClosed().subscribe((res) => {
                            if (res) {
                              console.warn(
                                `Error no status '200 OK' para la oferta: ${this.editar.idenPredio.id_oferta}. No se actualizan los datos para la información administrativa de la oferta.`
                              );
                            }
                          });
                        }
                      });
                  } else {
                    let dialogRef = this.dialog.open(DialogsComponent, {
                      width: '350px',
                      data: `Error para la oferta: ${this.editar.idenPredio.id_oferta}. No se guardaron los cambios a los datos para la información fuente de la oferta.`,
                    });
                    dialogRef.afterClosed().subscribe((res) => {
                      if (res) {
                        console.warn(
                          `Error no status '200 OK' para la oferta: ${this.editar.idenPredio.id_oferta}. No se actualizan los datos para la información fuente de la oferta.`
                        );
                      }
                    });
                  }
                });
            } else {
              let dialogRef = this.dialog.open(DialogsComponent, {
                width: '350px',
                data: `Error: La persona ingresada no presenta el rol de perito interno del IGAC '2' o administrador '1', por lo tanto no se enviaron los datos de la información fuente y tampoco se asignó la oferta satisfactoriamente para verificación.`,
              });
              dialogRef.afterClosed().subscribe((res) => {
                if (res) {
                  console.warn(
                    `Error: La persona ingresada no presenta el rol de perito interno del IGAC '2' o administrador '1', por lo tanto no se enviaron los datos de la información fuente y tampoco se asignó la oferta satisfactoriamente para verificación.`
                  );
                }
              });
            }
          } else {
            let dialogRef = this.dialog.open(DialogsComponent, {
              width: '350px',
              data: `Error para la oferta: ${this.editar.idenPredio.id_oferta}. No se obtuvieron los datos de la persona que verifica (correo suministrado), no se enviaron los datos del formulario.`,
            });
            dialogRef.afterClosed().subscribe((res) => {
              if (res) {
                console.warn(
                  `Error no status '200 OK' para la oferta: ${this.editar.idenPredio.id_oferta}. No se obtuvieron los datos de la persona que verifica (correo suministrado), no se enviaron los datos del formulario.`
                );
              }
            });
          }
        });
    } else {
      let dialogRef = this.dialog.open(DialogsComponent, {
        width: '350px',
        data: `Error para la oferta: ${this.editar.idenPredio.id_oferta}. No se evidencian actualizaciones, por lo tanto no se envia el formulario.`,
      });
      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          console.warn(
            `Para la oferta: ${this.editar.idenPredio.id_oferta}. No se evidencian actualizaciones, por lo tanto no se envia el formulario.`
          );
        }
      });
    }
  }

  enviarTerminar() {
    this.resInfoFuente.token = String(localStorage.getItem('token'));
    let mensaje = this.editar.controlesGeneralesVistasMensaje();
    let controlTotal = this.editar.controlesGeneralesVistasBolean();
    if (mensaje === `` && controlTotal) {
      console.log(`NO SE PRESENTÓ NINGÚN ERROR... :)`);
      console.log(`Se procede al envío de los datos por vista: `);
      this.api
        .capOferRestIDOferta(this.editar.idenPredio, this.resInfoFuente.token)
        .subscribe((resIdenpre) => {
          if (resIdenpre.status === '200 OK') {
            localStorage.setItem('token', resIdenpre.token?.valueOf());
            console.warn(
              `La vista de crear oferta de la oferta: ${this.editar.idenPredio.id_oferta} fue enviada y almacenada.`
            );
            // this.resInfoFuente.token = String(localStorage.getItem('token'));
            this.api
              .capOferRestLocOferta(
                this.editar.locPre,
                resIdenpre.token?.valueOf()
              )
              .subscribe((resLocpre) => {
                if (resLocpre.status === '200 OK') {
                  localStorage.setItem('token', resLocpre.token?.valueOf());
                  console.warn(
                    `La vista de localización oferta de la oferta:${this.editar.idenPredio.id_oferta} fue enviada y almacenada.`
                  );
                  // this.resInfoFuente.token = String(
                  //   localStorage.getItem('token')
                  // );
                  this.api
                    .capOferRestDatGenOferta(
                      this.editar.datGen,
                      resLocpre.token?.valueOf()
                    )
                    .subscribe((resDatGene) => {
                      if (resDatGene.status === '200 OK') {
                        localStorage.setItem(
                          'token',
                          resDatGene.token?.valueOf()
                        );
                        console.warn(
                          `La vista de datos generales de la oferta: ${this.editar.idenPredio.id_oferta} fue enviada y almacenada.`
                        );
                        // this.resInfoFuente.token = String(
                        //   localStorage.getItem('token')
                        // );
                        this.api
                          .capOferRestInfoFisOferta(
                            this.editar.infoFis,
                            resDatGene.token?.valueOf()
                          )
                          .subscribe((resDatFis) => {
                            if (resDatFis.status === '200 OK') {
                              localStorage.setItem(
                                'token',
                                resDatFis.token?.valueOf()
                              );
                              console.warn(
                                `La vista de información física de la oferta: ${this.editar.idenPredio.id_oferta} fue enviada y almacenada.`
                              );
                              // this.resInfoFuente.token = String(
                              //   localStorage.getItem('token')
                              // );
                              this.api
                                .capOferRestInfoEconoOferta(
                                  this.editar.infoEnono,
                                  resDatFis.token?.valueOf()
                                )
                                .subscribe((resDatEcono) => {
                                  if (resDatEcono.status === '200 OK') {
                                    localStorage.setItem(
                                      'token',
                                      resDatEcono.token?.valueOf()
                                    );
                                    console.warn(
                                      `La vista de información económica de la oferta: ${this.editar.idenPredio.id_oferta} fue enviada y almacenada.`
                                    );
                                    // this.resInfoFuente.token = String(
                                    //   localStorage.getItem('token')
                                    // );
                                    this.api
                                      .capOferRestInfoFuenteOferta(
                                        this.editar.infoFuente,
                                        resDatEcono.token?.valueOf()
                                      )
                                      .subscribe((resInfoFuente) => {
                                        if (resInfoFuente.status === '200 OK') {
                                          localStorage.setItem(
                                            'token',
                                            resInfoFuente.token?.valueOf()
                                          );
                                          console.warn(
                                            `La vista de información fuente de la oferta:  ${this.editar.idenPredio.id_oferta} fue enviada y almacenada.`
                                          );

                                          // this.resInfoFuente.token = String(
                                          //   localStorage.getItem('token')
                                          // );
                                          this.api
                                            .capOferRestInfoAdminOferta(
                                              this.editar.infoAdmin,
                                              resInfoFuente.token?.valueOf()
                                            )
                                            .subscribe((resInfoAdmin) => {
                                              if (
                                                resInfoAdmin.status === '200 OK'
                                              ) {
                                                localStorage.setItem(
                                                  'token',
                                                  resInfoAdmin.token?.valueOf()
                                                );
                                                console.warn(
                                                  `La vista de información administrativa de la oferta: ${this.editar.idenPredio.id_oferta} fue enviada y almacenada.`
                                                );
                                                let dialogRef =
                                                  this.dialog.open(
                                                    DialogsComponent,
                                                    {
                                                      width: '350px',
                                                      data: `Los datos de la oferta: ${this.editar.idenPredio.id_oferta} fueron enviados y almacenados satisfactoriamente, se procede a limpiar el formulario`,
                                                    }
                                                  );
                                                dialogRef
                                                  .afterClosed()
                                                  .subscribe((res) => {
                                                    if (res) {
                                                      console.warn(
                                                        `Los datos de la oferta: ${this.editar.idenPredio.id_oferta} fueron enviados y almacenados SATISFACTORIAMENTE, se procede a limpiar las variables`
                                                      );
                                                    }
                                                  });

                                                this.editar.limpiarVariablesControles();
                                                this.router.navigate([
                                                  'HomeOfertas',
                                                ]);
                                              } else {
                                                console.warn(
                                                  `Error no status '200 OK' para la oferta: ${this.editar.idenPredio.id_oferta}. No se enviaron los datos para la vista de información administrativa de la oferta.`
                                                );
                                              }
                                            });
                                        } else {
                                          console.warn(
                                            `Error no status '200 OK' para la oferta: ${this.editar.idenPredio.id_oferta}. No se enviaron los datos para la vista de información fuente de la oferta.`
                                          );
                                        }
                                      });
                                  } else {
                                    console.warn(
                                      `Error no status '200 OK' para la oferta: ${this.editar.idenPredio.id_oferta}. No se enviaron los datos para la vista de información económica de la oferta.`
                                    );
                                  }
                                });
                            } else {
                              console.warn(
                                `Error no status '200 OK' para la oferta: ${this.editar.idenPredio.id_oferta}. No se enviaron los datos para la vista de información física de la oferta.`
                              );
                            }
                          });
                      } else {
                        console.warn(
                          `Error no status '200 OK' para la oferta: ${this.editar.idenPredio.id_oferta}. No se enviaron los datos para la vista de datos generales de la oferta.`
                        );
                      }
                    });
                } else {
                  console.warn(
                    `Error no status '200 OK' para la oferta: ${this.editar.idenPredio.id_oferta}. No se enviaron los datos para la vista de localización oferta.`
                  );
                }
              });
          } else {
            `Error no status '200 OK' para la oferta: ${this.editar.idenPredio.id_oferta}. No se enviaron los datos para la vista de crear oferta.`;
          }
        });
    } else {
      let dialogRef = this.dialog.open(DialogsComponent, {
        width: '350px',
        data: `Errores: ${mensaje}`,
      });
      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          console.warn(`Errores: ${mensaje}`);
        }
      });
    }
  }

  capturarFile(event: any): any {
    this.archivos = event.target.files;
    // console.log(this.archivos);
  }

  capturarDocs(event: any): any {
    this.archivos = event.target.files;
    // console.log(this.archivos);
  }

  subirArchivos(): any {
    try {
      this.loading = true;
      const formData = new FormData();
      console.log(this.archivos);
      Array.from(this.archivos).forEach((f: any) => {
        console.log(f);
        formData.append('files', f);
      });

      this.api.cargarFile(formData).subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(
            (100 * event.loaded) / Number(event.total)
          );
        } else if (event instanceof HttpResponse) {
          this.editar.infoFuente.enlace_interno_foto_predio = true;
        }
        this.loading = false;
      });
    } catch (e) {
      this.loading = false;
      console.log('Error', e);
    }
  }

  subirArchivosDocs(): any {
    try {
      this.loadingDocs = true;
      const formData = new FormData();
      console.log(this.archivos);
      Array.from(this.archivos).forEach((f: any) => {
        console.log(f);
        formData.append('files', f);
      });

      this.api.cargarFile(formData).subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDoneDocs = Math.round(
            (100 * event.loaded) / Number(event.total)
          );
        } else if (event instanceof HttpResponse) {
          this.editar.infoFuente.enlace_documentos = true;
        }
        this.loadingDocs = false;
      });
    } catch (e) {
      this.loadingDocs = false;
      console.log('Error', e);
    }
  }
}
