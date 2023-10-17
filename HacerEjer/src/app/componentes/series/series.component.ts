import { Component, OnInit } from '@angular/core';
import { ISerie } from '../interfaces';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  Series:ISerie[];
  caratulas = []
  titulos = []
  temporadas = []
  sinopsis = []
  plataformas = []

  constructor(){
    this.Series = [];
  }

  ngOnInit(): void {
    for (let f = 0;f<this.titulos.length;f++){
      this.Series[f] = {
        caratula:this.caratulas[f], titulo:this.titulos[f], temporadas:this.temporadas[f], sinopsis:this.sinopsis[f], plataforma:this.plataformas[f]
      }
    }
  }
}
