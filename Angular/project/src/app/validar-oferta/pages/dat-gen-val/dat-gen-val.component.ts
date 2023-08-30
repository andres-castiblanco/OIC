import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  Form,
  AbstractControl,
} from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';

import { ApiService } from '../../../servicios/api/api.service';
import { ValidarService } from '../../../servicios/validar/validar.service';

import { datGenI } from '../../../modelos/crear-oferta-datgen.interface';
import { resCearOfer } from '../../../modelos/res-crear-ofer.interface';
import { group } from '@angular/animations';

import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from '../../components/dialogs/dialogs.component';
import { idenPreI } from 'src/app/modelos/crear-oferta-iden-pre.interface';

@Component({
  selector: 'app-dat-gen-val',
  templateUrl: './dat-gen-val.component.html',
  styleUrls: ['./dat-gen-val.component.css'],
})
export class DatGenValComponent {
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public validar: ValidarService,
    public dialog: MatDialog
  ) {}

  get idoferta() {
    return this.formUserGen.get('idoferta') as FormControl;
  }

  get dertip() {
    return this.formUserGen.get('dertip') as FormControl;
  }

  get tipinmb() {
    return this.formUserGen.get('tipinmb') as FormControl;
  }

  get valanex() {
    return this.formUserGen.get('valanex') as FormControl;
  }

  get feccapofer() {
    return this.formUserGen.get('feccapofer') as FormControl;
  }

  get tiemofemer() {
    return this.formUserGen.get('tiemofemer') as FormControl;
  }

  get proinmb() {
    return this.formUserGen.get('proinmb') as FormControl;
  }

  get desproy() {
    return this.formUserGen.get('desproy') as FormControl;
  }

  get estado_oferta() {
    return this.formUserGen.get('estado_oferta') as FormControl;
  }

  get obs_verifica() {
    return this.formUserGen.get('obs_verifica') as FormControl;
  }

  formUserGen = this.fb.group(
    {
      idoferta: [
        {
          value: this.validar.idenPredio.id_oferta,
          disabled: true,
        },
        Validators.required,
      ],
      dertip: [
        {
          value: this.validar.datGen.derecho_tipo,
          disabled: true,
        },
        Validators.required,
      ],
      tipinmb: [
        {
          value: this.validar.datGen.tipo_inmueble,
          disabled: true,
        },
        Validators.required,
      ],
      valanex: [
        {
          value: this.validar.datGen.si_valor_incluye_anexidades,
          disabled: true,
        },
      ],
      feccapofer: [
        {
          value: this.validar.datGen.fecha,
          disabled: true,
        },
        Validators.required,
      ],
      tiemofemer: [
        {
          value: this.validar.datGen.tiempo_oferta_mercado,
          disabled: true,
        },
      ],
      proinmb: [
        {
          value: this.validar.datGen.proyecto_inmobiliario,
          disabled: true,
        },
      ],
      desproy: [
        {
          value: this.validar.datGen.proyecto_descripcion,
          disabled: true,
        },
        [Validators.maxLength(500)],
      ],
      estado_oferta: [
        {
          value: String(this.validar.idenPredio.estado_oferta),
          disabled: false,
        },
        Validators.required,
      ],
      obs_verifica: [
        {
          value: String(this.validar.idenPredio.obs_verifica),
          disabled: false,
        },
      ],
    },
    {
      validator: [
        (group: any) => {
          if (group.controls.tipinmb.value !== 'LOTE') {
            return Validators.required(group.controls.valanex);
          }
          return null;
        },
        (group: any) => {
          if (
            this.validar.idenPredio.condicion_juridica?.valueOf() === 'PH' ||
            this.validar.idenPredio.condicion_juridica?.valueOf() ===
              'PH_MATRIZ' ||
            this.validar.idenPredio.condicion_juridica?.valueOf() ===
              'PH_UNIDAD_PREDIAL' ||
            this.validar.idenPredio.condicion_juridica?.valueOf() ===
              'CONDOMINIO' ||
            this.validar.idenPredio.condicion_juridica?.valueOf() ===
              'CONDOMINIO_MATRIZ' ||
            this.validar.idenPredio.condicion_juridica?.valueOf() ===
              'CONDOMINIO_UNIDAD_PREDIAL'
          ) {
            return Validators.required(group.controls.proinmb);
          }
          return null;
        },
        (group: any) => {
          if (group.controls.proinmb.value === 'SI') {
            return Validators.required(group.controls.desproy);
          }
          return null;
        },
      ],
    }
  );

  objDatGen: datGenI = {
    id_oferta: undefined,
    derecho_tipo: undefined,
    tipo_inmueble: undefined,
    si_valor_incluye_anexidades: undefined,
    fecha: undefined,
    tiempo_oferta_mercado: undefined,
    proyecto_inmobiliario: undefined,
    proyecto_descripcion: undefined,
  };

  resDatGene: resCearOfer = {
    id_oferta: null,
    status: null,
    token: String(localStorage.getItem('token')),
  };

  controlEntrevariables = {
    val_proyecto_inmobiliario:
      this.validar.idenPredio.condicion_juridica?.valueOf() === 'PH' ||
      this.validar.idenPredio.condicion_juridica?.valueOf() === 'PH_MATRIZ' ||
      this.validar.idenPredio.condicion_juridica?.valueOf() ===
        'PH_UNIDAD_PREDIAL' ||
      this.validar.idenPredio.condicion_juridica?.valueOf() === 'CONDOMINIO' ||
      this.validar.idenPredio.condicion_juridica?.valueOf() ===
        'CONDOMINIO_MATRIZ' ||
      this.validar.idenPredio.condicion_juridica?.valueOf() ===
        'CONDOMINIO_UNIDAD_PREDIAL'
        ? true
        : false,
  };

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

  procesar() {
    this.resIdenpre.token = String(localStorage.getItem('token'));
    this.objIdenPre.estado_oferta = String(
      this.formUserGen.value.estado_oferta?.valueOf()
    );
    this.objIdenPre.obs_verifica =
      this.formUserGen.value.obs_verifica?.valueOf() == '' ||
      this.formUserGen.value.obs_verifica?.valueOf() == undefined ||
      this.formUserGen.value.obs_verifica?.valueOf() == null
        ? 'Sin observaciones.'
        : this.formUserGen.value.obs_verifica?.valueOf();

    if (
      this.validar.idenPredio.id_oferta === undefined ||
      JSON.stringify(this.validar.idenPredio) !==
        JSON.stringify(this.objIdenPre)
    ) {
      this.api
        .capOferRestIDOferta(this.objIdenPre, this.resIdenpre.token)
        .subscribe((resIdenpre) => {
          if (resIdenpre.status === '200 OK') {
            localStorage.setItem('token', resIdenpre.token?.valueOf());
            this.validar.setIdenPredio = this.objIdenPre;
            const dialogRef = this.dialog.open(DialogsComponent, {
              width: '350px',
              data: `La validación de la oferta ${this.validar.idenPredio.id_oferta} fue almacenada exitosamente.
            Se evidencia actualizaciones por lo tanto se actualizan los datos.`,
            });
            dialogRef.afterClosed().subscribe((res) => {
              if (res) {
                console.warn(
                  `La validación de la oferta ${this.validar.idenPredio.id_oferta} fue almacenada exitosamente. Se evidencia actualizaciones por lo tanto se actualizan los datos.`
                );
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
      const dialogRef = this.dialog.open(DialogsComponent, {
        width: '350px',
        data: `Validaciones ya registradas para la oferta ${this.validar.idenPredio.id_oferta}. No se evidencia actualizaciones.`,
      });
      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          console.warn(
            `Validaciones ya registradas para la oferta ${this.validar.idenPredio.id_oferta}. No se evidencia actualizaciones.`
          );
        }
      });
    }
  }
}
