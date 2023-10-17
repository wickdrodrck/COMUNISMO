import { Component, OnInit } from '@angular/core';
import { IPelicula } from '../interfaces';
import { MultimediaService } from '../multimedia.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {

  lPeliculas:IPelicula[]=[];

  constructor(ds:MultimediaService){
    this.lPeliculas = ds.GetMensajes();
  }

  
}
