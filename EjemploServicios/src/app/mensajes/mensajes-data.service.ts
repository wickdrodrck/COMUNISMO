import { Injectable } from '@angular/core';
import { IMensaje } from './interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MensajesDataService {

  listaMensajes:IMensaje[]=[];
  constructor(private http:HttpClient) { 
    
  }

  public getMensajes(){
    this.http.get<IMensaje[]>("../assets/data/mensajes.json").subscribe(
      l => {
        l.forEach(m=>{this.listaMensajes.push(m);})
      }
    
      );
      return this.listaMensajes;
  }

  getMensaje(posicion:any){
    return this.listaMensajes[posicion];
  }
}
