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
import { EditarService } from '../../../servicios/editar/editar.service';

import { datGenI } from '../../../modelos/crear-oferta-datgen.interface';
import { resCearOfer } from '../../../modelos/res-crear-ofer.interface';
import { group } from '@angular/animations';

import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from '../../components/dialogs/dialogs.component';

@Component({
  selector: 'app-dat-gen-edit',
  templateUrl: './dat-gen-edit.component.html',
  styleUrls: ['./dat-gen-edit.component.css'],
})
export class DatGenEditComponent {
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public editar: EditarService,
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

  formUserGen = this.fb.group(
    {
      idoferta: [
        {
          value: this.editar.idenPredio.id_oferta,
          disabled: true,
        },
        Validators.required,
      ],
      dertip: [this.editar.datGen.derecho_tipo, Validators.required],
      tipinmb: [this.editar.datGen.tipo_inmueble, Validators.required],
      valanex: [this.editar.datGen.si_valor_incluye_anexidades],
      feccapofer: [this.editar.datGen.fecha, Validators.required],
      tiemofemer: [this.editar.datGen.tiempo_oferta_mercado],
      proinmb: [this.editar.datGen.proyecto_inmobiliario],
      desproy: [
        this.editar.datGen.proyecto_descripcion,
        [Validators.maxLength(500)],
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
            this.editar.idenPredio.condicion_juridica?.valueOf() === 'PH' ||
            this.editar.idenPredio.condicion_juridica?.valueOf() ===
              'PH_MATRIZ' ||
            this.editar.idenPredio.condicion_juridica?.valueOf() ===
              'PH_UNIDAD_PREDIAL' ||
            this.editar.idenPredio.condicion_juridica?.valueOf() ===
              'CONDOMINIO' ||
            this.editar.idenPredio.condicion_juridica?.valueOf() ===
              'CONDOMINIO_MATRIZ' ||
            this.editar.idenPredio.condicion_juridica?.valueOf() ===
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

  // envioFormVistaBack: boolean = false;
  // noVistaSiguienteBoton: boolean = true;

  controlEntrevariables = {
    val_proyecto_inmobiliario:
      this.editar.idenPredio.condicion_juridica?.valueOf() === 'PH' ||
      this.editar.idenPredio.condicion_juridica?.valueOf() === 'PH_MATRIZ' ||
      this.editar.idenPredio.condicion_juridica?.valueOf() ===
        'PH_UNIDAD_PREDIAL' ||
      this.editar.idenPredio.condicion_juridica?.valueOf() === 'CONDOMINIO' ||
      this.editar.idenPredio.condicion_juridica?.valueOf() ===
        'CONDOMINIO_MATRIZ' ||
      this.editar.idenPredio.condicion_juridica?.valueOf() ===
        'CONDOMINIO_UNIDAD_PREDIAL'
        ? true
        : false,
  };

  procesar() {
    this.resDatGene.token = String(localStorage.getItem('token'));
    this.objDatGen.id_oferta = this.editar.idenPredio.id_oferta?.valueOf();
    this.objDatGen.derecho_tipo = this.formUserGen.value.dertip?.valueOf();
    this.objDatGen.tipo_inmueble = this.formUserGen.value.tipinmb?.valueOf();
    this.formUserGen.value.tipinmb?.valueOf() === 'LOTE'
      ? (this.objDatGen.si_valor_incluye_anexidades = undefined)
      : (this.objDatGen.si_valor_incluye_anexidades =
          this.formUserGen.value.valanex?.valueOf());

    if (
      this.objDatGen.tipo_inmueble !== 'FINCA' &&
      this.objDatGen.tipo_inmueble !== 'LOTE' &&
      this.objDatGen.tipo_inmueble !== 'CASA' &&
      this.objDatGen.tipo_inmueble !== 'BODEGA' &&
      this.objDatGen.tipo_inmueble !== 'CASA_CAMPESTRE' &&
      this.objDatGen.tipo_inmueble !== 'CABAÑA' &&
      this.objDatGen.tipo_inmueble !== 'CASA_LOTE' &&
      this.objDatGen.tipo_inmueble !== 'OTRO'
    ) {
      this.editar.infoFis.area_terreno = undefined;
    }

    if (this.objDatGen.tipo_inmueble === 'LOTE') {
      this.editar.infoFis.ano_construccion = undefined;
      this.editar.infoFis.area_construccion = undefined;
      this.editar.infoFis.conservacion = undefined;
      this.editar.infoFis.altura_edificio = undefined;
      this.editar.infoFis.numero_piso = undefined;
      this.editar.infoFis.numero_banos = undefined;
      this.editar.infoFis.numero_habitaciones = undefined;
      this.editar.infoFis.numero_depositos = undefined;
      this.editar.infoFis.construcciones_anexas = undefined;
      this.editar.infoEnono.valor_construccion_m2 = undefined;
      this.editar.infoEnono.valor_area_privada = undefined;
      this.editar.infoEnono.valor_administracion = undefined;
      this.editar.datGen.si_valor_incluye_anexidades = undefined;
    }

    if (
      this.objDatGen.tipo_inmueble !== 'LOTE' &&
      this.objDatGen.tipo_inmueble !== 'FINCA'
    ) {
      this.editar.infoFis.area_cultivo = undefined;
      this.editar.infoFis.edad_cultivo = undefined;
      this.editar.infoFis.tipo_cultivo = undefined;
      this.editar.infoEnono.valor_terreno = undefined;
      this.editar.infoEnono.valor_cultivo = undefined;
    }

    this.objDatGen.fecha = this.formUserGen.value.feccapofer?.valueOf();
    this.objDatGen.tiempo_oferta_mercado = Number(
      this.formUserGen.value.tiemofemer?.valueOf()
    );
    this.controlEntrevariables.val_proyecto_inmobiliario
      ? (this.objDatGen.proyecto_inmobiliario =
          this.formUserGen.value.proinmb?.valueOf())
      : (this.objDatGen.proyecto_inmobiliario = undefined);

    this.formUserGen.value.proinmb?.valueOf() === 'SI'
      ? (this.objDatGen.proyecto_descripcion =
          this.formUserGen.value.desproy?.valueOf())
      : (this.objDatGen.proyecto_descripcion = undefined);

    if (
      this.editar.idenPredio.id_oferta !== undefined &&
      JSON.stringify(this.editar.datGen) !== JSON.stringify(this.objDatGen)
    ) {
      this.api
        .capOferRestDatGenOferta(this.objDatGen, this.resDatGene.token)
        .subscribe((resDatGene) => {
          if (resDatGene.status === '200 OK') {
            localStorage.setItem('token', resDatGene.token?.valueOf());
            this.editar.setDatGenPredio = this.objDatGen;

            // this.envioFormVistaBack = true;
            // this.noVistaSiguienteBoton =
            //   this.editar.idenPredio.id_oferta !== undefined &&
            //   this.envioFormVistaBack
            //     ? false
            //     : true;

            const dialogRef = this.dialog.open(DialogsComponent, {
              width: '350px',
              data: `El valor del id oferta se inicializó y fue asignado como: ${this.editar.idenPredio.id_oferta}.
              Se evidencia actualizaciones por lo tanto se actualizan los datos.`,
            });
            dialogRef.afterClosed().subscribe((res) => {
              if (res) {
                console.warn(
                  `El valor de id_oferta  se inicializó y fue asignado su valor es de: ${this.editar.idenPredio.id_oferta}. Se evidencia actualizaciones por lo tanto se actualizan los datos.`
                );
              }
            });
          } else {
            const dialogRef = this.dialog.open(DialogsComponent, {
              width: '350px',
              data: `Error para la oferta: ${this.editar.idenPredio.id_oferta}. No se guardaron los cambios a los datos.`,
            });
            dialogRef.afterClosed().subscribe((res) => {
              if (res) {
                console.warn(
                  `Error no status '200 OK' para la oferta: ${this.editar.idenPredio.id_oferta}. No se actualizan los datos.`
                );
              }
            });
          }
        });
    } else {
      const dialogRef = this.dialog.open(DialogsComponent, {
        width: '350px',
        data: `El valor de id oferta ya fue asignado su valor es de: ${this.editar.idenPredio.id_oferta}. No se evidencia actualizaciones.`,
      });
      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          console.warn(
            `El valor de id_oferta ya fue asignado su valor es de: ${this.editar.idenPredio.id_oferta}. No se evidencia actualizaciones.`
          );
        }
      });
    }
  }
}
