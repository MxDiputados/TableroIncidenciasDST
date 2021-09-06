import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Incidencias } from '../../interface/interface';
import { IncidenciaService } from '../../services/incidencia.service';
import { Severidad, Sistema } from '../incidencia/incidencia.component';
import { Router } from '@angular/router'

interface Estatus {
  texto: string;
  valor: number;
}
interface Modulo {
  nombreModulo:string;
  value:number
}
@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  incidencias: Incidencias[] = [];

  estatus: Estatus[] = [
    { texto: 'Reportado', valor: 0 },
    { texto: 'Asignado', valor: 1 },
    { texto: 'En atencion', valor: 2 },
    { texto: 'Verificar', valor: 3 },
    { texto: 'Atendido', valor: 4 },
    { texto: 'Rechazado', valor: 5 },
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
  modulos: Modulo[] = [
    { nombreModulo: 'Todos', value: 999 },
    { nombreModulo: 'Actualizaciones', value: 1 },
    { nombreModulo: 'Complicaciones temáticas', value: 2 },
    { nombreModulo: 'Constitución', value: 3 },
    { nombreModulo: 'Datos Personales', value: 4 },
    { nombreModulo: 'Estatutos Federales Vigentes', value: 5 },
    { nombreModulo: 'Leyes Vigentes', value: 6 },
    { nombreModulo: 'Leyes Abrogadas', value: 7 },
    { nombreModulo: 'Manuales Federales', value: 8 },
    { nombreModulo: 'Marco juridico', value: 9 },
    { nombreModulo: 'Marco juridico', value: 10 },
    { nombreModulo: 'Minutas con Clave Única', value: 11 },
    { nombreModulo: 'Reglamento Federales Vigente', value: 12 },
    { nombreModulo: 'Sentencias', value: 13 },
  ];
  sistema: any = '';
  tipoModulo: string = "Todos";
  severidad: any = 999;

  public incidenciasFiltradas: Incidencias[] = [];


  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
  reportado: any;
  reportados: [] = [];
  asignado: Incidencias[] = [];
  enAtencion: Incidencias[] = [];
  verificar: Incidencias[] = [];
  atendido: Incidencias[] = [];
  rechazado: Incidencias[] = [];
  loading: boolean = false;
  tipoEstatus: any = 999;

  constructor(private incidenciaService: IncidenciaService,private router: Router) { }

  ngOnInit(): void {
    console.log("ruta actual",this.router.url); 
    this.loading = true;
    this.incidenciaService.getIncidencias().subscribe(result => {
      this.incidencias = result;
      this.loading= false;
      console.log("VALORES",this.incidencias);
      this.reportado = this.incidencias.filter(inc => inc.DetalleEstatus === 'Reportado');
      this.asignado = this.incidencias.filter(inc => inc.DetalleEstatus === 'Asignado');
      this.enAtencion = this.incidencias.filter(inc => inc.DetalleEstatus === 'En atencion');
      this.verificar = this.incidencias.filter(inc => inc.DetalleEstatus === 'Verificar');
      this.atendido = this.incidencias.filter(inc => inc.DetalleEstatus === 'Atendido');
      this.rechazado = this.incidencias.filter(inc => inc.DetalleEstatus === 'Rechazado');
    });
  }
  filtrarTipo(estatus: any) {
    this.tipoEstatus = estatus;
    this.filtrar();
  }

  filtrar() {
    
    this.reportado = this.incidencias.filter(inc => inc.DetalleEstatus === 'Reportado');
    this.reportado = [...this.reportado.filter((inci: any) => {
      return this.sistema !== '' ? inci.Sistema === this.sistema : true;
    })];
    this.reportado = [...this.reportado.filter((inci:any) => {
      return this.severidad !== 999 ? inci.Severidad === this.severidad : true;
    })];
    this.reportado =  [...this.reportado.filter((inci: any) => {
      return this.tipoModulo !== 'Todos' ? inci.NombreModulo === this.tipoModulo : true;
    })];

    this.asignado = this.incidencias.filter(inc => inc.DetalleEstatus === 'Asignado');
    this.asignado = [...this.asignado.filter((inci: any) => {
      return this.sistema !== '' ? inci.Sistema === this.sistema : true;
    })];
    this.asignado = [...this.asignado.filter((inci) => {
      return this.severidad !== 999 ? inci.Severidad === this.severidad : true;
    })];
    this.asignado =  [...this.asignado.filter((inci: any) => {
      return this.tipoModulo !== 'Todos' ? inci.NombreModulo === this.tipoModulo : true;
    })];

    this.enAtencion = this.incidencias.filter(inc => inc.DetalleEstatus === 'En atencion');
    this.enAtencion =  [...this.enAtencion.filter((inci: any) => {
      return this.sistema !== '' ? inci.Sistema === this.sistema : true;
    })];
    this.enAtencion = [...this.enAtencion.filter((inci) => {
      return this.severidad !== 999 ? inci.Severidad === this.severidad : true;
    })];
    this.enAtencion = [...this.enAtencion.filter((inci: any) => {
      return this.tipoModulo !== 'Todos' ? inci.NombreModulo === this.tipoModulo : true;
    })];

    this.verificar = this.incidencias.filter(inc => inc.DetalleEstatus === 'Verificar');
    this.verificar = [...this.verificar.filter((inci: any) => {
      return this.sistema !== '' ? inci.Sistema === this.sistema : true;
    })];
    this.verificar = [...this.verificar.filter((inci) => {
      return this.severidad !== 999 ? inci.Severidad === this.severidad : true;
    })];
    this.verificar = [...this.verificar.filter((inci: any) => {
      return this.tipoModulo !== 'Todos' ? inci.NombreModulo === this.tipoModulo : true;
    })];

    this.atendido = this.incidencias.filter(inc => inc.DetalleEstatus === 'Atendido');
    this.atendido = [...this.atendido.filter((inci: any) => {
      return this.sistema !== '' ? inci.Sistema === this.sistema : true;
    })];
    this.atendido = [...this.atendido.filter((inci) => {
      return this.severidad !== 999 ? inci.Severidad === this.severidad : true;
    })];
    this.atendido = [...this.atendido.filter((inci: any) => {
      return this.tipoModulo !== 'Todos' ? inci.NombreModulo === this.tipoModulo : true;
    })];
    
    this.rechazado = this.incidencias.filter(inc => inc.DetalleEstatus === 'Rechazado');
    this.rechazado = [...this.rechazado.filter((inci: any) => {
      return this.sistema !== '' ? inci.Sistema === this.sistema : true;
    })];
    this.rechazado = [...this.rechazado.filter((inci) => {
      return this.severidad !== 999 ? inci.Severidad === this.severidad : true;
    })];
    this.rechazado = [...this.rechazado.filter((inci: any) => {
      return this.tipoModulo !== 'Todos' ? inci.NombreModulo === this.tipoModulo : true;
    })];

  }
 

  drop(event: CdkDragDrop<Incidencias[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log("movido");
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


}
