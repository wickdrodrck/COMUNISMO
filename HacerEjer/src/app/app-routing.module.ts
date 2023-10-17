import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { SeriesComponent } from './componentes/series/series.component';
import { PeliculaComponent } from './componentes/pelicula/pelicula.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  {
    path:"Peliculas",
    component:PeliculasComponent
  },
  {
    path:"Inicio",
    component:InicioComponent
  },
  {
    path:"Series",
    component:SeriesComponent
  },
  {
    path:"Peliculas/:pos",
    component:PeliculaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
