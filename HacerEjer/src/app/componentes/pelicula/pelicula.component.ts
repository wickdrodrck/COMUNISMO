import { Component, OnInit } from '@angular/core';
import { IPelicula } from '../interfaces';
import { MultimediaService } from '../multimedia.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  
  pos:any;
  nombre:any;

  
  lPeliculas:IPelicula[]=[];

  constructor(ds:MultimediaService, private router:ActivatedRoute){
    
    this.lPeliculas = ds.GetMensajes();
    
  }
  ngOnInit(): void {
    this.pos = this.router.snapshot.paramMap.get("pos");

  }
}
