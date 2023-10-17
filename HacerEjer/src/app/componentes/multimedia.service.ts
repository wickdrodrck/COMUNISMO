import { Injectable, OnInit } from '@angular/core';
import { IPelicula } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService implements OnInit{


  public GetMensajes(){
    return this.Pepepelis;
  }

  public GetMensaje(posicion:any){
    return this.Pepepelis[posicion]
  }

  public GetPOS(){
    return this.Pepepelis.indexOf;
  }

  Pepepelis:IPelicula[];
  caratulas: any[];
  titulos : any[];
  años : any[];
  directores : any[];
  sinopsis : any[];
  puntuaciones : any[];

  constructor() { 
    this.Pepepelis=[];
    this.caratulas = ["Inception.jpeg","shawsank.jpg","batman.jpg","pulp.jpg","forrest.jpg"]
    this.titulos = [
      "Inception",
      "The Shawshank Redemption",
      "The Dark Knight",
      "Pulp Fiction",
      "Forrest Gump"
    ];
  
    this.años = [
    2010,
    1994,
    2008,
    1994,
    1994
    ];
  
    this.directores = [
    "Christopher Nolan",
    "Frank Darabont",
    "Christopher Nolan",
    "Quentin Tarantino",
    "Robert Zemeckis"
    ];
  
  this.sinopsis = [
    "Dom Cobb, un ladrón hábil, es capaz de entrar en los sueños de las personas y robar sus secretos más íntimos.",
    "Dos hombres encuentran la redención mientras están encarcelados en la prisión de Shawshank por crímenes que no cometieron.",
    "Batman se enfrenta al crimen organizado en Gotham City con la ayuda de su aliado, el fiscal de distrito Harvey Dent.",
    "Las vidas de varios personajes se entrelazan en la violenta y caótica Los Ángeles.",
    "La vida de Forrest Gump, un hombre con un coeficiente intelectual bajo, y su extraordinaria vida a lo largo de varias décadas."
  ];
  
  this.puntuaciones = [
    8.8,
    9.3,
    9.0,
    8.9,
    8.8
  ];

  for (let i = 0;i<this.titulos.length;i++){
    this.Pepepelis[i]={
      caratula:this.caratulas[i], titulo:this.titulos[i], anyo:this.años[i], director:this.directores[i], sinopsis:this.sinopsis[i], puntuacion:this.puntuaciones[i]
    }
    
  }

  }

  ngOnInit(): void{
    
    }
}
