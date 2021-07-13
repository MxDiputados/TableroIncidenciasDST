import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { IncidenciasRoutingModule } from './incidencias-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidenciaComponent } from './pages/incidencia/incidencia.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IncidenciaTarjetaComponent } from './components/incidencia-tarjeta/incidencia-tarjeta.component';
import { DetallesIncidenciaComponent } from './pages/detalles-incidencia/detalles-incidencia.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pages/pipes/filter.pipe';
import { TableroComponent } from './pages/tablero/tablero.component';



@NgModule({
  declarations: [
    IncidenciaComponent,
    IncidenciaTarjetaComponent,
    DetallesIncidenciaComponent,
    FilterPipe,
    TableroComponent
  ],
  imports: [
    CommonModule,
    IncidenciasRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    MaterialModule,
    FormsModule
  ]
})
export class IncidenciasModule { }
