import { Injectable } from '@angular/core';
import { idenPreI } from '../../modelos/crear-oferta-iden-pre.interface';
import { resIdenPreI } from '../../modelos/res-iden-pre.interface';
import { resCearOfer } from '../../modelos/res-crear-ofer.interface';
import { locPreI } from '../../modelos/crear-oferta-loc-pre.interface';
import { datGenI } from '../../modelos/crear-oferta-datgen.interface';
import { infoFisiI } from '../../modelos/crear-oferta-inf-fis.interface';
import { infoEconoI } from '../../modelos/crear-oferta-inf-eco.interface';
import { infoFuenteI } from '../../modelos/crear-oferta-inf-fuente.interface';
import { infoAdminI } from '../../modelos/crear-oferta-inf-admin.interface';
import { loginLoginI } from '../../modelos/login-login.interface';
import { resLoginLoginI } from '../../modelos/res-login-login.interface';
import { loginRegistroI } from '../../modelos/login-registro.interface';
import { resLoginRegistroI } from '../../modelos/res-login-registro.interface';
import { loginContraI } from '../../modelos/login-contra.interface';
import { resLoginContraI } from '../../modelos/res-logis-contra.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loginCambContraI } from 'src/app/modelos/login-camb-contra.interface';
import { consulOferI } from 'src/app/modelos/consulta-oferta.interface';
import { resconsulOferI } from 'src/app/modelos/res-consulta-oferta.interface';

import { Observable } from 'rxjs';
import { ResEditOferI } from 'src/app/modelos/res-editar-oferta.interface';
import { infoPerI } from 'src/app/modelos/crear-oferta-personas.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // url: string = 'http://172.28.163.141:8081/ofertainmobiliaria/';
  // url: string = 'http://172.19.3.110:8081/ofertainmobiliaria/';
  url: string = 'https://309edcca-12b0-466d-a296-f6a172af65b7.mock.pstmn.io/';
  urlImgs: string = 'https://file.io';

  constructor(private http: HttpClient) {}

  loginLoginUsuario(form: loginLoginI): Observable<resLoginLoginI> {
    let direccion = this.url + 'login';
    return this.http.post<resLoginLoginI>(direccion, form);
  }

  loginRegistroUsuario(form: loginContraI): Observable<resLoginRegistroI> {
    let direccion = this.url + 'registro';
    return this.http.post<resLoginRegistroI>(direccion, form);
  }

  loginContraUsuario(form: loginRegistroI): Observable<resLoginContraI> {
    let direccion = this.url + 'contrasena';
    return this.http.post<resLoginContraI>(direccion, form);
  }

  loginCambContraUsuario(form: loginCambContraI): Observable<resLoginContraI> {
    let direccion = this.url + 'cambiocontrasena';
    return this.http.post<resLoginContraI>(direccion, form);
  }

  capOferRestIDOferta(form: idenPreI, token: String): Observable<resCearOfer> {
    let direccion = this.url + 'pre_iden';
    let contenido = { furmulario: form, token: token };
    return this.http.post<resCearOfer>(direccion, contenido);
  }

  capOferRestLocOferta(form: locPreI, token: String): Observable<resCearOfer> {
    let direccion = this.url + 'pre_loca';
    let contenido = { furmulario: form, token: token };
    return this.http.post<resCearOfer>(direccion, contenido);
  }

  capOferRestDatGenOferta(
    form: datGenI,
    token: String
  ): Observable<resCearOfer> {
    let direccion = this.url + 'pre_gene';
    let contenido = { furmulario: form, token: token };
    return this.http.post<resCearOfer>(direccion, contenido);
  }

  capOferRestInfoFisOferta(
    form: infoFisiI,
    token: String
  ): Observable<resCearOfer> {
    let direccion = this.url + 'pre_fisi';
    let contenido = { furmulario: form, token: token };
    return this.http.post<resCearOfer>(direccion, contenido);
  }

  capOferRestInfoEconoOferta(
    form: infoEconoI,
    token: String
  ): Observable<resCearOfer> {
    let direccion = this.url + 'pre_econo';
    let contenido = { furmulario: form, token: token };
    return this.http.post<resCearOfer>(direccion, contenido);
  }

  capOferRestInfoFuenteOferta(
    form: infoFuenteI,
    token: String
  ): Observable<resCearOfer> {
    let direccion = this.url + 'info_fuente';
    let contenido = { furmulario: form, token: token };
    return this.http.post<resCearOfer>(direccion, contenido);
  }

  veriOfertaPersonaVerifica(
    correo: String,
    token: String
  ): Observable<resLoginLoginI> {
    let direccion = this.url + 'perso_veri';
    let contenido = { correo: correo, token: token };
    return this.http.post<resLoginLoginI>(direccion, contenido);
  }

  capOferRestInfoAdminOferta(
    form: infoAdminI,
    token: String
  ): Observable<resCearOfer> {
    let direccion = this.url + 'info_admin';
    let contenido = { furmulario: form, token: token };
    return this.http.post<resCearOfer>(direccion, contenido);
  }

  cargarFile(file: FormData) {
    return this.http.post(this.urlImgs, file, {
      reportProgress: true,
      observe: 'events',
    });
  }

  consultarOferta(
    form: consulOferI,
    token: String
  ): Observable<resconsulOferI> {
    let direccion = this.url + 'consul_oferta';
    let contenido = { furmulario: form, token: token };
    return this.http.post<resconsulOferI>(direccion, contenido);
  }

  consultarOfertaPag(
    form: consulOferI,
    token: String,
    pagina: Number
  ): Observable<resconsulOferI> {
    let direccion = this.url + 'consul_oferta/' + pagina;
    let contenido = { furmulario: form, token: token };
    return this.http.post<resconsulOferI>(direccion, contenido);
  }

  editarOferta(id_oferta: Number, token: String): Observable<ResEditOferI> {
    let direccion = this.url + 'edit_oferta';
    let contenido = { id_oferta: id_oferta, token: token };
    return this.http.post<ResEditOferI>(direccion, contenido);
  }

  validarOferta(
    id_oferta: Number,
    token: String,
    rol: Number
  ): Observable<ResEditOferI> {
    let direccion = this.url + 'edit_oferta';
    let contenido = { id_oferta: id_oferta, token: token };
    return this.http.post<ResEditOferI>(direccion, contenido);
  }
}
