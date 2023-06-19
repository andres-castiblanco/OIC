import { Injectable } from '@angular/core';
import { idenPreI } from '../../modelos/crear-oferta-iden-pre.interface';
import { resIdenPreI } from '../../modelos/res-iden-pre.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'http://localhost:8081/ofertainmobiliaria/';

  constructor(private http: HttpClient) {}

  capOferRestIDOferta(form: idenPreI): Observable<resIdenPreI> {
    let direccion = this.url + 'pre_iden';
    return this.http.post<resIdenPreI>(direccion, form);
  }
}
