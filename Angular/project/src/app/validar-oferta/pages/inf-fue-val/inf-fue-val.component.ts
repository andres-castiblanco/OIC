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
import { ValidarService } from '../../../servicios/validar/validar.service';

import { infoFuenteI } from '../../../modelos/crear-oferta-inf-fuente.interface';
import { resCearOfer } from '../../../modelos/res-crear-ofer.interface';
import { infoAdminI } from 'src/app/modelos/crear-oferta-inf-admin.interface';
import { infoPerI } from 'src/app/modelos/crear-oferta-personas.interface';
import { resLoginLoginI } from 'src/app/modelos/res-login-login.interface';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from '../../components/dialogs/dialogs.component';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { idenPreI } from 'src/app/modelos/crear-oferta-iden-pre.interface';

@Component({
  selector: 'app-inf-fue-val',
  templateUrl: './inf-fue-val.component.html',
  styleUrls: ['./inf-fue-val.component.css'],
})
export class InfFueValComponent {
  public archivos: File[] = [];
  percentDone: number = 0;
  loading: boolean = false;
  percentDoneDocs: number = 0;
  loadingDocs: boolean = false;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public validar: ValidarService,
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

  // get obs2() {
  //   return this.formUserFue.get('obs2') as FormControl;
  // }

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

  get estado_oferta() {
    return this.formUserFue.get('estado_oferta') as FormControl;
  }

  get obs_verifica() {
    return this.formUserFue.get('obs_verifica') as FormControl;
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
          value: this.validar.idenPredio.id_oferta,
          disabled: true,
        },
        Validators.required,
      ],
      nom: [
        {
          value: this.validar.infoFuente.nombre_oferente,
          disabled: true,
        },
        [Validators.required, Validators.maxLength(50)],
      ],
      tel: [
        {
          value: this.validar.infoFuente.numero_contacto,
          disabled: true,
        },
        [Validators.max(100000000000000)],
      ],
      url: [
        {
          value: this.validar.infoFuente.url,
          disabled: true,
        },
        [Validators.maxLength(500)],
      ],
      obs1: [
        {
          value: this.validar.infoFuente.observaciones,
          disabled: true,
        },
        [Validators.required, Validators.maxLength(4000)],
      ],

      nomcapofer: [
        {
          value: this.validar.infoPer.nombres,
          disabled: true,
        },
        [Validators.required, Validators.maxLength(50)],
      ],
      apecapofer: [
        {
          value: this.validar.infoPer.apellidos,
          disabled: true,
        },
        [Validators.required, Validators.maxLength(50)],
      ],
      tipercap: [
        {
          value: this.validar.infoPer.ti_persona,
          disabled: true,
        },
        Validators.required,
      ],
      numidencap: [
        {
          value: this.validar.infoPer.ni_persona,
          disabled: true,
        },
        [Validators.required, Validators.max(100000000000), Validators.min(1)],
      ],
      emailcap: [
        {
          value: this.validar.infoPer.email,
          disabled: true,
        },
        [Validators.required, Validators.maxLength(50)],
      ],
      areresofer: [
        {
          value: this.validar.infoPer.area,
          disabled: true,
        },
        [Validators.required, Validators.maxLength(100)],
      ],

      nomveriofer: [
        {
          value: this.validar.infoPerVeri.nombres,
          disabled: true,
        },
        [Validators.maxLength(50)],
      ],
      apeveriofer: [
        {
          value: this.validar.infoPerVeri.apellidos,
          disabled: true,
        },
        ,
        [Validators.maxLength(50)],
      ],
      tiperver: [
        {
          value: this.validar.infoAdmin.ti_persona_verifica,
          disabled: true,
        },
      ],
      numperver: [
        {
          value: this.validar.infoAdmin.ni_persona_verifica,
          disabled: true,
        },
        ,
        [Validators.max(100000000000000), Validators.min(1)],
      ],
      emailveri: [
        this.validar.infoAdmin.email_persona_verifica,
        [Validators.required, Validators.email, Validators.maxLength(50)],
      ],
      areverofer: [
        {
          value: this.validar.infoAdmin.area_persona_verifica,
          disabled: true,
        },
        [Validators.maxLength(100)],
      ],
      estado_oferta: [
        {
          value: this.validar.idenPredio.estado_oferta,
          disabled: false,
        },
        Validators.required,
      ],
      obs_verifica: [
        {
          value: this.validar.idenPredio.obs_verifica,
          disabled: false,
        },
        [Validators.maxLength(1000)],
      ],
    },
    {
      validator: [InfFueValComponent.valoresValidacionesInfoFu],
    }
  );

  objIdenPre: idenPreI = {
    id_oferta: this.validar.idenPredio.id_oferta,
    npn: this.validar.idenPredio.npn,
    npa: this.validar.idenPredio.npa,
    codigo_homologado: this.validar.idenPredio.codigo_homologado,
    matricula: this.validar.idenPredio.matricula,
    condicion_juridica: this.validar.idenPredio.condicion_juridica,
    tipo_oferta: this.validar.idenPredio.tipo_oferta,
    tipo_predio: this.validar.idenPredio.tipo_predio,
    oferta_origen: this.validar.idenPredio.oferta_origen,
    estado_oferta: this.validar.idenPredio.estado_oferta,
    obs_verifica: this.validar.idenPredio.obs_verifica,
  };

  resIdenpre: resCearOfer = {
    id_oferta: null,
    status: null,
    token: String(localStorage.getItem('token')),
  };

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
    this.objIdenPre.estado_oferta = String(
      this.formUserFue.value.estado_oferta?.valueOf()
    );
    this.objIdenPre.obs_verifica =
      this.formUserFue.value.obs_verifica?.valueOf() == '' ||
      this.formUserFue.value.obs_verifica?.valueOf() == undefined ||
      this.formUserFue.value.obs_verifica?.valueOf() == null
        ? 'Sin observaciones.'
        : this.formUserFue.value.obs_verifica?.valueOf();

    this.objPerVeri.email = this.formUserFue.value.emailveri?.valueOf();

    if (
      this.validar.idenPredio.id_oferta !== undefined &&
      (JSON.stringify(this.validar.idenPredio) !==
        JSON.stringify(this.objIdenPre) ||
        JSON.stringify(this.validar.infoAdmin) !==
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
            this.validar.setInfoPersonaVeri = resPerVerifica.dat_usua;

            if (
              this.validar.infoPerVeri.rol === 2 ||
              this.validar.infoPerVeri.rol === 1
            ) {
              this.objInfoAdmin.ni_persona_verifica =
                this.validar.infoPerVeri.ni_persona;
              this.objInfoAdmin.ti_persona_verifica =
                this.validar.infoPerVeri.ti_persona;
              this.objInfoAdmin.email_persona_verifica =
                this.validar.infoPerVeri.email;
              this.objInfoAdmin.area_persona_verifica =
                this.validar.infoPerVeri.area;

              this.validar.setInfoAdminePredio = this.objInfoAdmin;

              this.formUserFue.controls['nomveriofer'].setValue(
                String(this.validar.infoPerVeri.nombres)
              );
              this.formUserFue.controls['apeveriofer'].setValue(
                String(this.validar.infoPerVeri.apellidos)
              );
              this.formUserFue.controls['numperver'].setValue(
                Number(this.objInfoAdmin.ni_persona_verifica)
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

              // this.api
              //   .capOferRestInfoFuenteOferta(
              //     this.objInfoFuente,
              //     this.resInfoFuente.token
              //   )
              //   .subscribe((resInfoFuente) => {
              //     if (resInfoFuente.status === '200 OK') {
              //       localStorage.setItem(
              //         'token',
              //         resInfoFuente.token?.valueOf()
              //       );

              //       this.validar.setInfoFuentePredio = this.objInfoFuente;

              //       let dialogRef = this.dialog.open(DialogsComponent, {
              //         width: '350px',
              //         data: `El valor del id oferta se inicializó y fue asignado como: ${this.validar.idenPredio.id_oferta}.
              //           Se evidencia actualizaciones por lo tanto se actualizan los datos de información fuente de la oferta.`,
              //       });
              //       dialogRef.afterClosed().subscribe((res) => {
              //         if (res) {
              //           console.warn(
              //             `El valor de id_oferta  se inicializó y fue asignado su valor es de: ${this.validar.idenPredio.id_oferta}. Se evidencia actualizaciones por lo tanto se actualizan los datos.`
              //           );
              //         }
              //       });

              this.api
                .capOferRestIDOferta(this.objIdenPre, this.resInfoFuente.token)
                .subscribe((resIdenpre) => {
                  if (resIdenpre.status === '200 OK') {
                    localStorage.setItem('token', resIdenpre.token?.valueOf());
                    this.validar.setIdenPredio = this.objIdenPre;
                    const dialogRef = this.dialog.open(DialogsComponent, {
                      width: '350px',
                      data: `La validación de la oferta ${this.validar.idenPredio.id_oferta}  fue almacenada exitosamente.
            Se evidencia actualizaciones por lo tanto se actualizan los datos.`,
                    });
                    dialogRef.afterClosed().subscribe((res) => {
                      if (res) {
                        console.warn(
                          `La validación de la oferta ${this.validar.idenPredio.id_oferta} fue almacenada exitosamente. Se evidencia actualizaciones por lo tanto se actualizan los datos.`
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

                          this.validar.setInfoAdminePredio = this.objInfoAdmin;
                          // this.envioFormVistaBack = true;
                          // this.noVistaSiguienteBoton =
                          //   this.validar.idenPredio.id_oferta !==
                          //     undefined && this.envioFormVistaBack
                          //     ? false
                          //     : true;
                          // this.validar.habilitarVista(
                          //   'noEnvioTerminar',
                          //   this.noVistaSiguienteBoton
                          // );

                          let dialogRef = this.dialog.open(DialogsComponent, {
                            width: '350px',
                            data: `Se asignaron los valores administrativos de la persona que captura la oferta ${this.validar.idenPredio.id_oferta}.`,
                          });
                          dialogRef.afterClosed().subscribe((res) => {
                            if (res) {
                              console.warn(
                                `Se asignaron los valores administrativos de la persona que captura la oferta ${this.validar.idenPredio.id_oferta}.`
                              );
                            }
                          });
                        } else {
                          let dialogRef = this.dialog.open(DialogsComponent, {
                            width: '350px',
                            data: `Error para la oferta: ${this.validar.idenPredio.id_oferta}. No se guardaron los cambios a los datos para la información administrativa de la oferta.`,
                          });
                          dialogRef.afterClosed().subscribe((res) => {
                            if (res) {
                              console.warn(
                                `Error no status '200 OK' para la oferta: ${this.validar.idenPredio.id_oferta}. No se actualizan los datos para la información administrativa de la oferta.`
                              );
                            }
                          });
                        }
                      });
                  } else {
                    const dialogRef = this.dialog.open(DialogsComponent, {
                      width: '350px',
                      data: `Error para la oferta: ${this.validar.idenPredio.id_oferta}. No se guardaron los cambios a los datos.`,
                    });
                    dialogRef.afterClosed().subscribe((res) => {
                      if (res) {
                        console.warn(
                          `Error no status '200 OK' para la oferta: ${this.validar.idenPredio.id_oferta}. No se actualizan los datos.`
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
              data: `Error para la oferta: ${this.validar.idenPredio.id_oferta}. No se obtuvieron los datos de la persona que verifica (correo suministrado), no se enviaron los datos del formulario.`,
            });
            dialogRef.afterClosed().subscribe((res) => {
              if (res) {
                console.warn(
                  `Error no status '200 OK' para la oferta: ${this.validar.idenPredio.id_oferta}. No se obtuvieron los datos de la persona que verifica (correo suministrado), no se enviaron los datos del formulario.`
                );
              }
            });
          }
        });
    } else {
      let dialogRef = this.dialog.open(DialogsComponent, {
        width: '350px',
        data: `Error para la oferta: ${this.validar.idenPredio.id_oferta}. No se evidencian actualizaciones, por lo tanto no se envia el formulario.`,
      });
      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          console.warn(
            `Para la oferta: ${this.validar.idenPredio.id_oferta}. No se evidencian actualizaciones, por lo tanto no se envia el formulario.`
          );
        }
      });
    }
  }

  enviarTerminar() {
    if (
      this.validar.idenPredio.id_oferta !== undefined &&
      this.objPerVeri.email !== undefined &&
      this.objPerVeri.email !== null &&
      this.objPerVeri.email !== ''
    ) {
      this.resInfoFuente.token = String(localStorage.getItem('token'));
      this.api
        .capOferRestIDOferta(this.objIdenPre, this.resInfoFuente.token)
        .subscribe((resIdenpre) => {
          if (resIdenpre.status === '200 OK') {
            localStorage.setItem('token', resIdenpre.token?.valueOf());
            this.validar.setIdenPredio = this.objIdenPre;
            const dialogRef = this.dialog.open(DialogsComponent, {
              width: '350px',
              data: `La validación de la oferta ${this.validar.idenPredio.id_oferta} fue almacenada exitosamente.
            Diríjase a la funcionalidad de consulta para corroborar sus cambios.`,
            });
            dialogRef.afterClosed().subscribe((res) => {
              if (res) {
                console.warn(
                  `La validación de la oferta ${this.validar.idenPredio.id_oferta} fue almacenada exitosamente. Diríjase a la funcionalidad de consulta para corroborar sus cambios.`
                );
              }
            });
            this.validar.limpiarVariablesControles();
            this.router.navigate(['HomeOfertas']);
          } else {
            const dialogRef = this.dialog.open(DialogsComponent, {
              width: '350px',
              data: `Error para la oferta: ${this.validar.idenPredio.id_oferta}. No se guardaron los cambios a los datos.`,
            });
            dialogRef.afterClosed().subscribe((res) => {
              if (res) {
                console.warn(
                  `Error no status '200 OK' para la oferta: ${this.validar.idenPredio.id_oferta}. No se actualizan los datos.`
                );
              }
            });
          }
        });
    } else {
      const dialogRef = this.dialog.open(DialogsComponent, {
        width: '350px',
        data: `Validaciones ya registradas para la oferta ${this.validar.idenPredio.id_oferta}. Diríjase a la funcionalidad de consulta para corroborar sus cambios.`,
      });
      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          console.warn(
            `Validaciones ya registradas para la oferta ${this.validar.idenPredio.id_oferta}. Diríjase a la funcionalidad de consulta para corroborar sus cambios.`
          );
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
          this.validar.infoFuente.enlace_interno_foto_predio = true;
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
          this.validar.infoFuente.enlace_documentos = true;
        }
        this.loadingDocs = false;
      });
    } catch (e) {
      this.loadingDocs = false;
      console.log('Error', e);
    }
  }
}
