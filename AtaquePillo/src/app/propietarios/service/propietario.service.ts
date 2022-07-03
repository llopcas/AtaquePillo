import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Propietario } from '../models/propietario';
import { PropietarioImpl } from '../models/propietario-impl';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {
  private host: string = environment.host;
	  private urlEndPoint: string = `${this.host}/propietario`;
  constructor(    private http: HttpClient,
    private auxService: AuxiliarService
   ) { }


getId(url: string):string{
  let posicionFinal: number = url.lastIndexOf('/');
  let numId:string = url.slice(posicionFinal + 1, url.length);
  return numId;
}

    getPropietarios(): Observable<any> {
	    return this.http.get<any>(this.urlEndPoint);
    }
    
    extraerPropietarios(respuestaApi: any): Propietario[] {
    
      const propietarios: Propietario[] = [];
      respuestaApi._embedded.propietarios.forEach((a: any) => {
      propietarios.push(this.mapearPropietario(a));
       
    
      });
    
      return propietarios;
    
    }
    
   
    
    mapearPropietario(propietarioApi: any): PropietarioImpl {
    
      let nuevoPropietario: PropietarioImpl = new PropietarioImpl();
      
    
       nuevoPropietario.nombre= propietarioApi.nombre;
        nuevoPropietario.nif= propietarioApi.nif;
       nuevoPropietario.apellido1= propietarioApi.apellido1;
       nuevoPropietario.apellido2= propietarioApi.apellido2;
       nuevoPropietario.mail= propietarioApi.mail;
       nuevoPropietario.numeroCuenta= propietarioApi.numeroCuenta;
      nuevoPropietario.idPropietario = this.getIdPropietario(propietarioApi._links.propietario.href);

        return nuevoPropietario;
      
       
    
    }
    deletePropietario(id: string): Observable<Propietario> {
      return this.http
        .delete<Propietario>(`${this.urlEndPoint}/${id}`).pipe(
        catchError((e) =>{
          if(e.status ===400) {
            return throwError(()=> new Error (e));
          }
          if(e.roor.mensaje){
            console.error(e.error.mensaje);
          }
            return throwError(()=> new Error(e));
          })
        );
    }
   
    
    create(propietario: Propietario): Observable<any> {
      return this.http.post(`${this.urlEndPoint}`, propietario).pipe(
        catchError((e) =>{
          if(e.status ===400) {
            return throwError(()=> new Error (e));
          }
          if(e.roor.mensaje){
            console.error(e.error.mensaje);
          }
          return throwError(()=> new Error(e));
        })
        );
      
    
    }
    
    updatePropietario(propietario:PropietarioImpl): Observable<any>{
      return this.http.patch<any>(`${this.urlEndPoint}/${propietario.idPropietario}`, propietario).pipe(
        catchError((e) => {
          if (e.status === 400) {
            return throwError(() => new Error(e));
          }
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(() => new Error(e));
          })
        );
    }
   
    
    getPropietariosPagina(pagina: number): Observable<any> {
    
      return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
    
    }

    getIdPropietario(url: string): string {
      url = url.slice(0, url.length - 1)
      return url.slice(url.lastIndexOf('/') + 1, url.length);
    }
}
