import { Injectable } from '@angular/core';
import { idenPreI } from '../../modelos/crear-oferta-iden-pre.interface';
import { interVistasOfertas } from '../../modelos/interfece-vistas-ofertas';
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

  vistasHabilitar: interVistasOfertas = {
    noVistaIdenPreOfer: true,
    noVistaLocOfer: false,
    noVistaDatGen: false,
    noVistaInfoFisi: false,
    noVistaInfoEnoco: false,
    noVistaInfoFuen: false,
  };

  set setIdenPredio(idenPredioCom: idenPreI) {
    this.idenPredio = { ...idenPredioCom };
  }

  habilitarVista(vista: keyof interVistasOfertas, controlVista: boolean) {
    this.vistasHabilitar[vista] =
      this.idenPredio.id_oferta === null || controlVista ? false : true;
  }
}
