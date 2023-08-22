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
import { ValrelacionesService } from '../../../servicios/valrelaciones/valrelaciones.service';

import { datGenI } from '../../../modelos/crear-oferta-datgen.interface';
import { resCearOfer } from '../../../modelos/res-crear-ofer.interface';
import { group } from '@angular/animations';

import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from '../../components/dialogs/dialogs.component';

@Component({
  selector: 'app-dat-gen',
  templateUrl: './dat-gen.component.html',
  styleUrls: ['./dat-gen.component.css'],
})
export class DatGenComponent {
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public valrelacionesService: ValrelacionesService,
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
          value: this.valrelacionesService.idenPredio.id_oferta,
          disabled: true,
        },
        Validators.required,
      ],
      dertip: [
        this.valrelacionesService.datGen.derecho_tipo,
        Validators.required,
      ],
      tipinmb: [
        this.valrelacionesService.datGen.tipo_inmueble,
        Validators.required,
      ],
      valanex: [this.valrelacionesService.datGen.si_valor_incluye_anexidades],
      feccapofer: [this.valrelacionesService.datGen.fecha, Validators.required],
      tiemofemer: [this.valrelacionesService.datGen.tiempo_oferta_mercado],
      proinmb: [this.valrelacionesService.datGen.proyecto_inmobiliario],
      desproy: [
        this.valrelacionesService.datGen.proyecto_descripcion,
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
            this.valrelacionesService.idenPredio.condicion_juridica?.valueOf() ===
              'PH' ||
            this.valrelacionesService.idenPredio.condicion_juridica?.valueOf() ===
              'PH_MATRIZ' ||
            this.valrelacionesService.idenPredio.condicion_juridica?.valueOf() ===
              'PH_UNIDAD_PREDIAL' ||
            this.valrelacionesService.idenPredio.condicion_juridica?.valueOf() ===
              'CONDOMINIO' ||
            this.valrelacionesService.idenPredio.condicion_juridica?.valueOf() ===
              'CONDOMINIO_MATRIZ' ||
            this.valrelacionesService.idenPredio.condicion_juridica?.valueOf() ===
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
  };

  envioFormVistaBack: boolean = false;
  noVistaSiguienteBoton: boolean = true;

  controlEntrevariables = {
    val_proyecto_inmobiliario:
      this.valrelacionesService.idenPredio.condicion_juridica?.valueOf() ===
        'PH' ||
      this.valrelacionesService.idenPredio.condicion_juridica?.valueOf() ===
        'PH_MATRIZ' ||
      this.valrelacionesService.idenPredio.condicion_juridica?.valueOf() ===
        'PH_UNIDAD_PREDIAL' ||
      this.valrelacionesService.idenPredio.condicion_juridica?.valueOf() ===
        'CONDOMINIO' ||
      this.valrelacionesService.idenPredio.condicion_juridica?.valueOf() ===
        'CONDOMINIO_MATRIZ' ||
      this.valrelacionesService.idenPredio.condicion_juridica?.valueOf() ===
        'CONDOMINIO_UNIDAD_PREDIAL'
        ? true
        : false,
  };

  procesar() {
    this.objDatGen.id_oferta =
      this.valrelacionesService.idenPredio.id_oferta?.valueOf();
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
      this.valrelacionesService.infoFis.area_terreno = undefined;
    }

    if (this.objDatGen.tipo_inmueble === 'LOTE') {
      this.valrelacionesService.infoFis.ano_construccion = undefined;
      this.valrelacionesService.infoFis.area_construccion = undefined;
      this.valrelacionesService.infoFis.conservacion = undefined;
      this.valrelacionesService.infoFis.altura_edificio = undefined;
      this.valrelacionesService.infoFis.numero_piso = undefined;
      this.valrelacionesService.infoFis.numero_banos = undefined;
      this.valrelacionesService.infoFis.numero_habitaciones = undefined;
      this.valrelacionesService.infoFis.numero_depositos = undefined;
      this.valrelacionesService.infoFis.construcciones_anexas = undefined;
      this.valrelacionesService.infoEnono.valor_construccion_m2 = undefined;
      this.valrelacionesService.infoEnono.valor_area_privada = undefined;
      this.valrelacionesService.infoEnono.valor_administracion = undefined;
      this.valrelacionesService.datGen.si_valor_incluye_anexidades = undefined;
    }

    if (
      this.objDatGen.tipo_inmueble !== 'LOTE' &&
      this.objDatGen.tipo_inmueble !== 'FINCA'
    ) {
      this.valrelacionesService.infoFis.area_cultivo = undefined;
      this.valrelacionesService.infoFis.edad_cultivo = undefined;
      this.valrelacionesService.infoFis.tipo_cultivo = undefined;
      this.valrelacionesService.infoEnono.valor_terreno = undefined;
      this.valrelacionesService.infoEnono.valor_cultivo = undefined;
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
      this.valrelacionesService.idenPredio.id_oferta !== undefined &&
      JSON.stringify(this.valrelacionesService.datGen) !==
        JSON.stringify(this.objDatGen)
    ) {
      this.api
        .capOferRestDatGenOferta(this.objDatGen)
        .subscribe((resDatGene) => {
          if (resDatGene.status === '200 OK') {
            this.valrelacionesService.setDatGenPredio = this.objDatGen;

            this.envioFormVistaBack = true;
            this.noVistaSiguienteBoton =
              this.valrelacionesService.idenPredio.id_oferta !== undefined &&
              this.envioFormVistaBack
                ? false
                : true;
            this.valrelacionesService.habilitarVista(
              'noVistaInfoFisi',
              this.noVistaSiguienteBoton
            );
            const dialogRef = this.dialog.open(DialogsComponent, {
              width: '350px',
              data: `El valor del id oferta se inicializó y fue asignado como: ${this.valrelacionesService.idenPredio.id_oferta}.
              Se evidencia actualizaciones por lo tanto se actualizan los datos.`,
            });
            dialogRef.afterClosed().subscribe((res) => {
              if (res) {
                console.warn(
                  `El valor de id_oferta  se inicializó y fue asignado su valor es de: ${this.valrelacionesService.idenPredio.id_oferta}. Se evidencia actualizaciones por lo tanto se actualizan los datos.`
                );
              }
            });
          } else {
            const dialogRef = this.dialog.open(DialogsComponent, {
              width: '350px',
              data: `Error para la oferta: ${this.valrelacionesService.idenPredio.id_oferta}. No se guardaron los cambios a los datos.`,
            });
            dialogRef.afterClosed().subscribe((res) => {
              if (res) {
                console.warn(
                  `Error no status '200 OK' para la oferta: ${this.valrelacionesService.idenPredio.id_oferta}. No se actualizan los datos.`
                );
              }
            });
          }
        });
    } else {
      const dialogRef = this.dialog.open(DialogsComponent, {
        width: '350px',
        data: `El valor de id oferta ya fue asignado su valor es de: ${this.valrelacionesService.idenPredio.id_oferta}. No se evidencia actualizaciones.`,
      });
      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          console.warn(
            `El valor de id_oferta ya fue asignado su valor es de: ${this.valrelacionesService.idenPredio.id_oferta}. No se evidencia actualizaciones.`
          );
        }
      });
    }
  }
}
