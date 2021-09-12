import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, identity } from 'rxjs';
import { Producto } from '../models/producto.model';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public url: string;
  public token;
  public retenerToken;
  public identity;
  endpoint:any = environment.endpoint;
  constructor(public _http: HttpClient) { }

  getProductos1(token:any):Observable<any>{
<<<<<<< HEAD
    console.log(token.params);
=======
>>>>>>> bc3d50a (This is a new commit for what I originally planned to be amended)
    let headers = new HttpHeaders().set('Content-Type', 'application/json');//.set('Authorization',token);
    return this._http.get(this.endpoint+'/listarProductos?page='+token.params.page+'&limit='+token.params.limit, {headers:headers})
  }

}




