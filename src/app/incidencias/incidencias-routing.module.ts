import { TableroComponent } from './pages/tablero/tablero.component';
import { DetallesIncidenciaComponent } from './pages/detalles-incidencia/detalles-incidencia.component';
import { IncidenciaComponent } from './pages/incidencia/incidencia.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'tablero',
        component: TableroComponent
      },
      {
        path:'incidencias',
        component: IncidenciaComponent
      },
      {
        path:'incidencias/:id',
        component: DetallesIncidenciaComponent
      },
     
      {
        path:'**',
        redirectTo:'tablero'
      }
      
    ]
  }
]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class IncidenciasRoutingModule { }
