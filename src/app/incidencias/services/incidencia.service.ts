import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/internal/operators/map';
import {  allIncidencias, getAllIncidenciaById } from 'src/app/graphql/operations/query';
// import { ApiService } from 'src/app/graphql/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {

  constructor(private apollo: Apollo) { }

 
  getIncidenciasById(id:number){
    return this.apollo.watchQuery({
      query:gql`{allIncidenciaById(Id: ${id}){
        Descripcion
        Observaciones
        Id
        Area
        Severidad
        DetalleSeveridad
        FechaActualizacion
        FechaHoraReporte
        UsuarioAsignado
        Categoria
        DetalleCategoria
        Estatus
        DetalleEstatus
        DetalleSistema
        Sistema
        Evidencia
        EvidenciaB64
        NombreModulo
      }}
      `,
      fetchPolicy:'network-only',
    })
    .valueChanges.pipe(
      map((result:any) => {
        // console.log("getIncidenciasById",result);
        return result.data.allIncidenciaById;
      })
    )
  }

  getIncidencias(){
    return this.apollo.watchQuery({
      query:allIncidencias,
      fetchPolicy:'network-only'
    })
    .valueChanges.pipe(
      map((result:any) => {
        // console.log("ressssssssssssssssss",result);
        return result.data.allIncidencias;
      })
    )
  }



}
