import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Incidencias } from '../../interface/interface';
import { IncidenciaService } from '../../services/incidencia.service';
interface Estatus {
  texto: string;
  valor: number;
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
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
  reportado: any;
  reportados: [] = [];
  asignado: Incidencias[] = [];
  enAtencion: Incidencias[] = [];
  verificar: Incidencias[] = [];
  atendido: Incidencias[] = [];
  rechazado: Incidencias[] = [];
  loading: boolean = false;

  constructor(private incidenciaService: IncidenciaService) { }

  ngOnInit(): void {
    this.loading = true;
    this.incidenciaService.getIncidencias().subscribe(result => {
      this.incidencias = result;
      this.loading= false;
      console.log(this.incidencias);
      this.reportado = this.incidencias.filter(inc => inc.DetalleEstatus === 'Reportado');
      this.asignado = this.incidencias.filter(inc => inc.DetalleEstatus === 'Asignado');
      this.enAtencion = this.incidencias.filter(inc => inc.DetalleEstatus === 'En atencion');
      this.verificar = this.incidencias.filter(inc => inc.DetalleEstatus === 'Verificar');
      this.atendido = this.incidencias.filter(inc => inc.DetalleEstatus === 'Atendido');
      this.rechazado = this.incidencias.filter(inc => inc.DetalleEstatus === 'Rechazado');


    });
  }
  /**
  * An array of all track ids. Each id is associated with a `cdkDropList` for the
  * track talks. This property can be used to connect all drop lists together.
  */
  // trackIds(boardIndex): string[] {
  //   return this.boards[boardIndex].tracks.map(track => track.id);
  // }

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
