import { gql } from 'apollo-angular';
// este es el document node que vamos a utilizar desde el servicio
export const allIncidencias = gql`
  {
    allIncidencias {
      Descripcion
      Observaciones
      Id
      Area
      Sistema
      DetalleSistema
      Severidad
      DetalleSeveridad
      FechaActualizacion
      FechaHoraReporte
      UsuarioAsignado
      Categoria
      DetalleCategoria
      Estatus
      DetalleEstatus
    }
  }
`;
export const getAllIncidenciaById = gql`
  query allIncidenciaById($id: number){
    allIncidenciaById(Id: $id){
      Descripcion
      Observaciones
      Id
      Area
      DetalleSeveridad
      Severidad
      Sistema
      DetalleSistema
      DetalleEstatus
      FechaActualizacion
      FechaHoraReporte
      UsuarioAsignado
      Categoria
      DetalleCategoria
      Estatus
    }
  }
`;
