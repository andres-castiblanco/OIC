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
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // url: string = 'http://172.28.163.141:8081/ofertainmobiliaria/';
  // url: string = 'http://172.19.3.110:8081/ofertainmobiliaria/';
  url: string = 'https://309edcca-12b0-466d-a296-f6a172af65b7.mock.pstmn.io/';

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

  capOferRestIDOferta(form: idenPreI): Observable<resIdenPreI> {
    let direccion = this.url + 'pre_iden';
    return this.http.post<resIdenPreI>(direccion, form);
  }

  capOferRestLocOferta(form: locPreI): Observable<resCearOfer> {
    let direccion = this.url + 'pre_loca';
    return this.http.post<resCearOfer>(direccion, form);
  }

  capOferRestDatGenOferta(form: datGenI): Observable<resCearOfer> {
    let direccion = this.url + 'pre_gene';
    return this.http.post<resCearOfer>(direccion, form);
  }

  capOferRestInfoFisOferta(form: infoFisiI): Observable<resCearOfer> {
    let direccion = this.url + 'pre_fisi';
    return this.http.post<resCearOfer>(direccion, form);
  }

  capOferRestInfoEconoOferta(form: infoEconoI): Observable<resCearOfer> {
    let direccion = this.url + 'pre_econo';
    return this.http.post<resCearOfer>(direccion, form);
  }

  capOferRestInfoFuenteOferta(form: infoFuenteI): Observable<resCearOfer> {
    let direccion = this.url + 'info_fuente';
    return this.http.post<resCearOfer>(direccion, form);
  }

  veriOfertaPersonaVerifica(correo: String): Observable<resLoginLoginI> {
    let direccion = this.url + 'perso_veri';
    return this.http.post<resLoginLoginI>(direccion, correo);
  }

  capOferRestInfoAdminOferta(form: infoAdminI): Observable<resCearOfer> {
    let direccion = this.url + 'info_admin';
    return this.http.post<resCearOfer>(direccion, form);
  }
}
