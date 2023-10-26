import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensajesComponent } from './mensajes/mensajes.component';
import {HttpClient, HttpClientModule } from "@angular/common/http"
import { MensajesDataService } from './mensajes-data.service';



@NgModule({
  declarations: [
    MensajesComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [
    MensajesComponent
  ],
  providers:[
    MensajesDataService
  ]
})
export class MensajesModule { }
