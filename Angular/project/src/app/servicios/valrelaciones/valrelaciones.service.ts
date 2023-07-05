import { Injectable } from '@angular/core';
import { idenPreI } from '../../modelos/crear-oferta-iden-pre.interface';

@Injectable({
  providedIn: 'root',
})
export class ValrelacionesService {
  constructor() {}

  idenPredio: idenPreI = {
    id_oferta: null,
    npn: '',
    npa: '',
    codigo_homologado: '',
    matricula: '',
    condicion_juridica: '',
    tipo_oferta: '',
    tipo_predio: '',
    oferta_origen: '',
    estado_oferta: 1,
    obs_verifica: 'Sin comentarios' as unknown | Text,
  };

  set setIdenPredio(idenPredioCom: idenPreI) {
    this.idenPredio = { ...idenPredioCom };
  }
}
