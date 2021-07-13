import { gql } from 'apollo-angular';
// este es el document node que vamos a utilizar desde el servicio
export const allIncidencias = gql`
  {
    allIncidencias {
      Descripcion
      Observaciones
      Id
      Area
      Severidad
      FechaActualizacion
      FechaHoraReporte
      UsuarioAsignado
      Categoria
      Estatus
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
      Severidad
      FechaActualizacion
      FechaHoraReporte
      UsuarioAsignado
      Categoria
      Estatus
    }
  }
`;
