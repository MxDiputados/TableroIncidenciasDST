export interface Incidencias {
  Descripcion: string;
  Observaciones?: string;
  Id: number;
  Area?: String;
  Severidad?: number;
  DetalleSeveridad?: string;
  FechaActualizacion?: string;
  FechaHoraReporte?: string;
  UsuarioAsignado?: string;
  Categoria?: number;
  Sistema?: string;
  DetalleSistema?: string;
  DetalleCategoria?: string;
  Estatus?: number;
  DetalleEstatus?: string;
  Evidencia?: string;
  EvidenciaB64?: string;
  NombreModulo?: string;
}
