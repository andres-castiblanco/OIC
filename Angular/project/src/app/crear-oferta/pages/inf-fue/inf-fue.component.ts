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
import { ValrelacionesService } from '../../../servicios/valrelaciones/valrelaciones.service';

import { infoFuenteI } from '../../../modelos/crear-oferta-inf-fuente.interface';
import { resCearOfer } from '../../../modelos/res-crear-ofer.interface';
import { infoAdminI } from 'src/app/modelos/crear-oferta-inf-admin.interface';
import { infoPerI } from 'src/app/modelos/crear-oferta-personas.interface';
import { resLoginLoginI } from 'src/app/modelos/res-login-login.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inf-fue',
  templateUrl: './inf-fue.component.html',
  styleUrls: ['./inf-fue.component.css'],
})
export class InfFueComponent {
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public valrelacionesService: ValrelacionesService,
    private router: Router
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
          value: this.valrelacionesService.idenPredio.id_oferta,
          disabled: true,
        },
        Validators.required,
      ],
      nom: [
        this.valrelacionesService.infoFuente.nombre_oferente,
        [Validators.required, Validators.maxLength(50)],
      ],
      tel: [
        this.valrelacionesService.infoFuente.numero_contacto,
        [Validators.max(100000000000000)],
      ],
      url: [
        this.valrelacionesService.infoFuente.url,
        [Validators.maxLength(500)],
      ],
      obs1: [
        this.valrelacionesService.infoFuente.observaciones,
        [Validators.required, Validators.maxLength(4000)],
      ],

      nomcapofer: [
        {
          value: this.valrelacionesService.infoPer.nombres,
          disabled: true,
        },
        [Validators.required, Validators.maxLength(50)],
      ],
      apecapofer: [
        {
          value: this.valrelacionesService.infoPer.apellidos,
          disabled: true,
        },
        [Validators.required, Validators.maxLength(50)],
      ],
      tipercap: [
        {
          value: this.valrelacionesService.infoPer.ti_persona,
          disabled: true,
        },
        Validators.required,
      ],
      numidencap: [
        {
          value: this.valrelacionesService.infoPer.ni_persona,
          disabled: true,
        },
        [Validators.required, Validators.max(100000000000), Validators.min(1)],
      ],
      emailcap: [
        {
          value: this.valrelacionesService.infoPer.email,
          disabled: true,
        },
        [Validators.required, Validators.maxLength(50)],
      ],
      areresofer: [
        {
          value: this.valrelacionesService.infoPer.area,
          disabled: true,
        },
        [Validators.required, Validators.maxLength(100)],
      ],
      // obs2: ['', [Validators.required, Validators.maxLength(1000)]],

      nomveriofer: [
        {
          value: this.valrelacionesService.infoPerVeri.nombres,
          disabled: true,
        },
        [Validators.maxLength(50)],
      ],
      apeveriofer: [
        {
          value: this.valrelacionesService.infoPerVeri.apellidos,
          disabled: true,
        },
        ,
        [Validators.maxLength(50)],
      ],
      tiperver: [
        {
          value: this.valrelacionesService.infoAdmin.ti_persona_verifica,
          disabled: true,
        },
      ],
      numperver: [
        {
          value: this.valrelacionesService.infoAdmin.ni_persona_verifica,
          disabled: true,
        },
        ,
        [Validators.max(100000000000000), Validators.min(1)],
      ],
      emailveri: [
        this.valrelacionesService.infoAdmin.email_persona_verifica,
        [Validators.maxLength(50)],
      ],
      areverofer: [
        {
          value: this.valrelacionesService.infoAdmin.area_persona_verifica,
          disabled: true,
        },
        [Validators.maxLength(100)],
      ],
      obs3: [
        {
          value: this.valrelacionesService.idenPredio.obs_verifica,
          disabled: true,
        },
        ,
        [Validators.maxLength(1000)],
      ],
    },
    {
      validator: [InfFueComponent.valoresValidacionesInfoFu],
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
  };

  // resPerVerifica: resLoginLoginI = {
  //   status: undefined,
  //   token: '',
  //   msj: '',
  //   dat_usua: undefined,
  // };

  envioFormVistaBack: boolean = false;
  noVistaSiguienteBoton: boolean = true;

  procesar() {
    this.objInfoFuente.id_oferta =
      this.valrelacionesService.idenPredio.id_oferta?.valueOf();
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

    this.objInfoAdmin.id_oferta =
      this.valrelacionesService.idenPredio.id_oferta?.valueOf();
    this.objInfoAdmin.ti_persona_captura =
      this.valrelacionesService.infoPer.ti_persona?.valueOf();
    this.objInfoAdmin.ni_persona_captura =
      this.valrelacionesService.infoPer.ni_persona?.valueOf();
    this.objInfoAdmin.email_persona_captura =
      this.valrelacionesService.infoPer.email?.valueOf();
    this.objInfoAdmin.area_persona_captura =
      this.valrelacionesService.infoPer.area?.valueOf();

    this.objPerVeri.email = this.formUserFue.value.emailveri?.valueOf();

    if (
      this.valrelacionesService.idenPredio.id_oferta !== undefined &&
      (JSON.stringify(this.valrelacionesService.infoFuente) !==
        JSON.stringify(this.objInfoFuente) ||
        JSON.stringify(this.valrelacionesService.infoAdmin) !==
          JSON.stringify(this.objInfoAdmin)) &&
      (this.objPerVeri.email === undefined ||
        this.objPerVeri.email === null ||
        this.objPerVeri.email === '')
    ) {
      this.api
        .capOferRestInfoFuenteOferta(this.objInfoFuente)
        .subscribe((resInfoFuente) => {
          if (resInfoFuente.status === '200 OK') {
            this.valrelacionesService.setInfoFuentePredio = this.objInfoFuente;
            // console.log(this.valrelacionesService.infoFuente);
            console.warn(
              `El valor de id_oferta  se inicializó y fue asignado su valor es de: ${this.valrelacionesService.idenPredio.id_oferta}. Se evidencia actualizaciones por lo tanto se actualizan los datos. InfoFuente`
            );

            this.api
              .capOferRestInfoAdminOferta(this.objInfoAdmin)
              .subscribe((resInfoAdmin) => {
                if (resInfoAdmin.status === '200 OK') {
                  this.valrelacionesService.setInfoAdminePredio =
                    this.objInfoAdmin;
                  this.envioFormVistaBack = true;
                  this.noVistaSiguienteBoton =
                    this.valrelacionesService.idenPredio.id_oferta !==
                      undefined && this.envioFormVistaBack
                      ? false
                      : true;
                  this.valrelacionesService.habilitarVista(
                    'noEnvioTerminar',
                    this.noVistaSiguienteBoton
                  );
                  // console.log(`Se habilita el botón finalizar y terminar...`);
                  // console.log(this.valrelacionesService.infoAdmin);
                  console.warn(
                    `Se asignaron los valores administrativos de la persona que captura la oferta ${this.valrelacionesService.idenPredio.id_oferta}.`
                  );
                } else {
                  console.warn(
                    `Error no status '200 OK' para la información administrativa de la oferta: ${this.valrelacionesService.idenPredio.id_oferta}. No se actualizan los datos.`
                  );
                }
              });
          } else {
            console.warn(
              `Error no status '200 OK' para la oferta: ${this.valrelacionesService.idenPredio.id_oferta}. No se actualizan los datos. InfoFuente`
            );
          }
        });
    } else if (
      this.valrelacionesService.idenPredio.id_oferta !== undefined &&
      (JSON.stringify(this.valrelacionesService.infoFuente) !==
        JSON.stringify(this.objInfoFuente) ||
        JSON.stringify(this.valrelacionesService.infoAdmin) !==
          JSON.stringify(this.objInfoAdmin)) &&
      this.objPerVeri.email !== undefined &&
      this.objPerVeri.email !== null &&
      this.objPerVeri.email !== ''
    ) {
      this.api
        .veriOfertaPersonaVerifica(this.objPerVeri.email)
        .subscribe((resPerVerifica) => {
          if (resPerVerifica.status === '200 OK') {
            this.valrelacionesService.setInfoPersonaVeri =
              resPerVerifica.dat_usua;

            if (
              this.valrelacionesService.infoPerVeri.rol === 2 ||
              this.valrelacionesService.infoPerVeri.rol === 1
            ) {
              this.objInfoAdmin.ni_persona_verifica =
                this.valrelacionesService.infoPerVeri.ni_persona;
              this.objInfoAdmin.ti_persona_verifica =
                this.valrelacionesService.infoPerVeri.ti_persona;
              this.objInfoAdmin.email_persona_verifica =
                this.valrelacionesService.infoPerVeri.email;
              this.objInfoAdmin.area_persona_verifica =
                this.valrelacionesService.infoPerVeri.area;

              this.valrelacionesService.setInfoAdminePredio = this.objInfoAdmin;

              this.formUserFue.controls['nomveriofer'].setValue(
                String(this.valrelacionesService.infoPerVeri.nombres)
              );
              this.formUserFue.controls['apeveriofer'].setValue(
                String(this.valrelacionesService.infoPerVeri.apellidos)
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

              this.api
                .capOferRestInfoFuenteOferta(this.objInfoFuente)
                .subscribe((resInfoFuente) => {
                  if (resInfoFuente.status === '200 OK') {
                    this.valrelacionesService.setInfoFuentePredio =
                      this.objInfoFuente;
                    // console.log(this.valrelacionesService.infoFuente);
                    console.warn(
                      `El valor de id_oferta se inicializó y fue asignado su valor es de: ${this.valrelacionesService.idenPredio.id_oferta}. Se evidencia actualizaciones por lo tanto se actualizan los datos. InfoFuente`
                    );

                    this.api
                      .capOferRestInfoAdminOferta(this.objInfoAdmin)
                      .subscribe((resInfoAdmin) => {
                        if (resInfoAdmin.status === '200 OK') {
                          this.valrelacionesService.setInfoAdminePredio =
                            this.objInfoAdmin;
                          this.envioFormVistaBack = true;
                          this.noVistaSiguienteBoton =
                            this.valrelacionesService.idenPredio.id_oferta !==
                              undefined && this.envioFormVistaBack
                              ? false
                              : true;
                          this.valrelacionesService.habilitarVista(
                            'noEnvioTerminar',
                            this.noVistaSiguienteBoton
                          );
                          // console.log(
                          //   `Se habilita el botón finalizar y terminar...`
                          // );
                          // console.log(this.valrelacionesService.infoAdmin);
                          console.warn(
                            `Se asignaron los valores administrativos de la persona que captura la oferta ${this.valrelacionesService.idenPredio.id_oferta}.`
                          );
                        } else {
                          console.warn(
                            `Error no status '200 OK' para la información administrativa de la oferta: ${this.valrelacionesService.idenPredio.id_oferta}. No se actualizan los datos.`
                          );
                        }
                      });
                  } else {
                    console.warn(
                      `Error no status '200 OK' para la oferta: ${this.valrelacionesService.idenPredio.id_oferta}. No se actualizan los datos. InfoFuente`
                    );
                  }
                });
              console.log(
                `Se asignan los valores de la persona que verifica...`
              );
            } else {
              console.warn(
                `Error: La persona ingresada no presenta el rol de perito interno del IGAC '2' o administrador '1', por lo tanto no se enviaron los datos de la información fuente y tampoco se asignó la oferta satisfactoriamente para verificación.`
              );
            }
          } else {
            console.warn(
              `Error no status '200 OK' para la oferta: ${this.valrelacionesService.idenPredio.id_oferta}. No se obtuvieron los datos de la persona que verifica (correo suministrado), no se enviaron los datos del formulario.`
            );
          }
        });
    } else {
      console.warn(
        `Para la oferta: ${this.valrelacionesService.idenPredio.id_oferta}. No se evidencian actualizaciones, por lo tanto no se envia el formualrio.`
      );
    }

    // console.log(this.formUserFue.value);
    // console.log(this.valrelacionesService.infoFuente);
  }

  enviarTerminar() {
    let mensaje = this.valrelacionesService.controlesGeneralesVistasMensaje();
    let controlTotal =
      this.valrelacionesService.controlesGeneralesVistasBolean();
    if (mensaje === `` && controlTotal) {
      console.log(`NO SE PRESENTÓ NINGÚN ERROR... :)`);
      console.log(`Se procede al envío de los datos por vista: `);
      this.api
        .capOferRestIDOferta(this.valrelacionesService.idenPredio)
        .subscribe((resIdenpre) => {
          if (resIdenpre.status === '200 OK') {
            console.warn(
              `La vista de crear oferta de la oferta: ${this.valrelacionesService.idenPredio.id_oferta} fue enviada y almacenada.`
            );
            this.api
              .capOferRestLocOferta(this.valrelacionesService.locPre)
              .subscribe((resLocpre) => {
                if (resLocpre.status === '200 OK') {
                  console.warn(
                    `La vista de localización oferta de la oferta:${this.valrelacionesService.idenPredio.id_oferta} fue enviada y almacenada.`
                  );
                  this.api
                    .capOferRestDatGenOferta(this.valrelacionesService.datGen)
                    .subscribe((resDatGene) => {
                      if (resDatGene.status === '200 OK') {
                        console.warn(
                          `La vista de datos generales de la oferta: ${this.valrelacionesService.idenPredio.id_oferta} fue enviada y almacenada.`
                        );
                        this.api
                          .capOferRestInfoFisOferta(
                            this.valrelacionesService.infoFis
                          )
                          .subscribe((resDatFis) => {
                            if (resDatFis.status === '200 OK') {
                              console.warn(
                                `La vista de información física de la oferta: ${this.valrelacionesService.idenPredio.id_oferta} fue enviada y almacenada.`
                              );
                              this.api
                                .capOferRestInfoEconoOferta(
                                  this.valrelacionesService.infoEnono
                                )
                                .subscribe((resDatEcono) => {
                                  if (resDatEcono.status === '200 OK') {
                                    console.warn(
                                      `La vista de información económica de la oferta: ${this.valrelacionesService.idenPredio.id_oferta} fue enviada y almacenada.`
                                    );
                                    this.api
                                      .capOferRestInfoFuenteOferta(
                                        this.valrelacionesService.infoFuente
                                      )
                                      .subscribe((resInfoFuente) => {
                                        if (resInfoFuente.status === '200 OK') {
                                          console.warn(
                                            `La vista de información fuente de la oferta:  ${this.valrelacionesService.idenPredio.id_oferta} fue enviada y almacenada.`
                                          );

                                          this.api
                                            .capOferRestInfoAdminOferta(
                                              this.valrelacionesService
                                                .infoAdmin
                                            )
                                            .subscribe((resInfoAdmin) => {
                                              if (
                                                resInfoAdmin.status === '200 OK'
                                              ) {
                                                console.warn(
                                                  `La vista de información administrativa de la oferta: ${this.valrelacionesService.idenPredio.id_oferta} fue enviada y almacenada.`
                                                );
                                                console.warn(
                                                  `Los datos de la oferta: ${this.valrelacionesService.idenPredio.id_oferta} fueron enviados y almacenados SATISFACTORIAMENTE, se procede a limpiar las variables`
                                                );
                                                this.valrelacionesService.limpiarVariablesControles();
                                                this.router.navigate([
                                                  'HomeOfertas',
                                                ]);
                                              } else {
                                                console.warn(
                                                  `Error no status '200 OK' para la oferta: ${this.valrelacionesService.idenPredio.id_oferta}. No se enviaron los datos para la vista de información administrativa de la oferta.`
                                                );
                                              }
                                            });
                                        } else {
                                          console.warn(
                                            `Error no status '200 OK' para la oferta: ${this.valrelacionesService.idenPredio.id_oferta}. No se enviaron los datos para la vista de información fuente de la oferta.`
                                          );
                                        }
                                      });
                                  } else {
                                    console.warn(
                                      `Error no status '200 OK' para la oferta: ${this.valrelacionesService.idenPredio.id_oferta}. No se enviaron los datos para la vista de información económica de la oferta.`
                                    );
                                  }
                                });
                            } else {
                              console.warn(
                                `Error no status '200 OK' para la oferta: ${this.valrelacionesService.idenPredio.id_oferta}. No se enviaron los datos para la vista de información física de la oferta.`
                              );
                            }
                          });
                      } else {
                        console.warn(
                          `Error no status '200 OK' para la oferta: ${this.valrelacionesService.idenPredio.id_oferta}. No se enviaron los datos para la vista de datos generales de la oferta.`
                        );
                      }
                    });
                } else {
                  console.warn(
                    `Error no status '200 OK' para la oferta: ${this.valrelacionesService.idenPredio.id_oferta}. No se enviaron los datos para la vista de localización oferta.`
                  );
                }
              });
          } else {
            `Error no status '200 OK' para la oferta: ${this.valrelacionesService.idenPredio.id_oferta}. No se enviaron los datos para la vista de crear oferta.`;
          }
        });
    } else {
      console.warn(`Errores: ${mensaje}`);
    }
  }
}
