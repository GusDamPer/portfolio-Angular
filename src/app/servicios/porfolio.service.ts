import { HttpClient } from '@angular/common/http'; //(6b)
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //(7a) definimos la clase Observable

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor(private http:HttpClient) { } //(6a) Injectamos el HttpClient en el constructor

  //(1)método para ver como se inyectan los servicios
  //obtenerDatos(){}

  obtenerDatos():Observable <any>{ //(7b) tiene que retornar un Observable.
    return this.http.get('./assets/data/data.json'); //el metodo get devuelve un JSON.
  }
}
