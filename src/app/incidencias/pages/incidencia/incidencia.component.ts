import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Incidencias } from '../../interface/interface';
import { IncidenciaService } from '../../services/incidencia.service';
export interface Estatus {
  texto: string;
  value: number;
}
export interface Sistema {
  NombreSistema: string;
  Oid: string;
}
export interface Severidad {
  texto: string;
  value: number;
}
@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css'],
})
export class IncidenciaComponent implements OnInit {
  loading: boolean = false;
  modulos: any = [{ texto: 'Todos', value: 999 }];
  estatus: Estatus[] = [
    { texto: 'Todos', value: 999 },
    { texto: 'Reportado', value: 0 },
    { texto: 'Asignado', value: 1 },
    { texto: 'En atencion', value: 2 },
    { texto: 'Verificar', value: 3 },
    { texto: 'Atendido', value: 4 },
    { texto: 'Rechazado', value: 5 },
  ];
  sistemas: Sistema[] = [
    { NombreSistema: 'Todos', Oid: '' },
    {
      NombreSistema: 'Transparencia',
      Oid: 'c8276148-4d5e-4bb9-b0b2-b493acfd44df',
    },
    {
      NombreSistema: 'Infocámara',
      Oid: '6ede949f-1a6d-4345-80b3-6547b95c0f6c',
    },
    {
      NombreSistema: 'Dirección de Eventos',
      Oid: '6ef6fdf2-6925-4f54-b987-8d171c020ede',
    },
    {
      NombreSistema: 'Accesos Puertas y Estacionamientos',
      Oid: 'a6cd87aa-adae-46dd-b827-e18e6c13fdba',
    },
    {
      NombreSistema: 'SIOB, impresión de recibos de gastos',
      Oid: 'a0ff5de1-fb2b-4edf-ab37-1bbd6c7c6aa5',
    },
    {
      NombreSistema:
        'Coordinación de Servicios de Información, Biblioteca y Museos',
      Oid: '04adf73f-a561-4d9b-b8cf-5f89aea42f8d',
    },
    {
      NombreSistema: 'Página de la Dirección de Archivo',
      Oid: '78bcb1f5-8cff-4755-8080-a1c4bd652cca',
    },
    {
      NombreSistema: 'Aministración del Portal Web. Módulo de Renovación LXV',
      Oid: 'd7ba0065-c06f-4f83-9924-e8eee2bb64d6',
    },
    {
      NombreSistema: 'APRAV, tableros y administración de sesiones y reuniones',
      Oid: 'd0d354d1-19ac-4f35-afca-8bb6b73d6bfe',
    },
    {
      NombreSistema: 'Ageda 2030',
      Oid: 'a3a0d820-95ba-4ebd-af8a-9c716f70ba33',
    },
    {
      NombreSistema: 'Aprobaciones Constitucionales Turnadas',
      Oid: 'a1227d23-c68c-4881-aa42-bd94ecac9177',
    },
    {
      NombreSistema: 'Impresión e inventario de bienes (almacen y resguardo)',
      Oid: '07b96eb6-db75-41de-8294-aea299a06f12',
    },
    {
      NombreSistema: 'Pagina Principal Diputados',
      Oid: '1897d552-c606-42cd-92f9-f6b21441a8c5',
    },
    {
      NombreSistema: 'Anteproyecto 2022',
      Oid: 'acf5d3e0-23f1-4bcc-a3fb-83648a1b8ca0',
    },
    {
      NombreSistema: 'Sistema de indexación y búsqueda de información',
      Oid: 'bbc55cb0-dc42-4cbf-9174-2f13f5e5edce',
    },
    {
      NombreSistema: 'Portal Web, Datos Abiertos',
      Oid: 'af41ac53-0eb1-40cc-b5c5-d8166b0538b6',
    },
    {
      NombreSistema: 'Portal Web, Directorio',
      Oid: 'c6d2ae1a-2504-4cfb-ab3b-81cb0580aa8c',
    },
    {
      NombreSistema: 'Sistema de Gestión de Entregables',
      Oid: '38c6c0cc-df08-446d-a262-42775ed61221',
    },
    {
      NombreSistema: 'Minutas Aprobadas por CD',
      Oid: '8ce9465d-55ba-400a-9f4c-7a57e7bce230',
    },
    {
      NombreSistema: 'Portal de Leyes',
      Oid: 'c4c0cdad-e9ae-454b-9e70-25d2da460c84',
    },
    {
      NombreSistema: 'Tus Diputados',
      Oid: '1ec0c9fb-d230-458b-977e-bc4988ba83de',
    },
    {
      NombreSistema: 'Protección de datos personales',
      Oid: '8a9a965c-0f25-4eba-992c-03c54063aeaf',
    },
  ];
  severidades: Severidad[] = [
    { texto: 'Todos', value: 999 },
    { texto: 'Muy baja', value: 0 },
    { texto: 'Baja', value: 1 },
    { texto: 'Media', value: 2 },
    { texto: 'Alta', value: 3 },
    { texto: 'Complicada', value: 4 },
    { texto: 'Muy alta', value: 5 },
  ];
  tipoEstatus: any = 999;
  sistema: any = '';
  public incidenciasFiltradas: Incidencias[] = [];
  severidad: any = 999;
  constructor(private incidencia: IncidenciaService) {}
  opcionSeleccionado: string = 'Todos';
  private incidencias: Incidencias[] = [];
  ngOnInit(): void {
    this.loading = true;
    this.incidencia.getIncidencias().subscribe((result) => {
      this.incidencias = result;
      this.incidenciasFiltradas = [...this.incidencias];
      this.loading = false;
      console.log('Incidencias', this.incidencias);
    });
  }
  filtrarTipo(estatus: any) {
    this.tipoEstatus = estatus;
    this.filtrar();
  }

  // console.log(inventory.find(isTable));

  filtrar() {
    console.log('tipo', this.tipoEstatus);
    this.incidenciasFiltradas = this.incidencias.filter((inci) => {
      return this.tipoEstatus !== 999
        ? inci.Estatus === this.tipoEstatus
        : true;
    });
    this.incidenciasFiltradas = this.incidenciasFiltradas.filter((inci) => {
      return this.sistema !== '' ? inci.Sistema === this.sistema : true;
    });
    this.incidenciasFiltradas = this.incidenciasFiltradas.filter((inci) => {
      return this.severidad !== 999 ? inci.Severidad === this.severidad : true;
    });
    console.log('incidencias YYY', this.incidenciasFiltradas);
  }
  // search(value: stri ng) {

  //   let inc = this.incidencias.filter(item =>
  //     item.Estatus.includes(value)
  //   );
  //   console.log("nuevo array filtrado",inc);
  //   console.log("valor filtrado",value);
  //   return [...inc];
  // }
}
