import { Component } from '@angular/core';
import { IMensaje } from '../interfaces';
import { MensajesDataService } from '../mensajes-data.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent {

  lMensajes:any;

  constructor(private ds:MensajesDataService){
    this.lMensajes=ds.getMensajes();
  }

}
