import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Incidencias } from '../../interface/interface';
import { IncidenciaService } from '../../services/incidencia.service';
interface Estatus {
  texto: string;
  value: number;
}

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css']
})
export class IncidenciaComponent implements OnInit {

  

  estatus:Estatus[] = [
    {texto:'Todos' ,      value:6},
    {texto:'Reportado',   value:0},
    {texto:'Asignado' ,   value:1},
    {texto:'En atencion', value:2},
    {texto:'Verificar',   value:3},
    {texto:'Atendido',    value:4},
    {texto:'Rechazado' ,  value:5},
  ];
  tipoEstatus: any = 0;
  public incidenciasFiltradas: Incidencias[]=[];
  loading=false;
  constructor(private incidencia: IncidenciaService) { }
  opcionSeleccionado: string = 'Todos';
  private incidencias: Incidencias[] = [];
  ngOnInit(): void {
this.loading=true;
    this.incidencia.getIncidencias().subscribe(result =>{
      this.incidencias = result;
      this.incidenciasFiltradas= [...this.incidencias];
      this.loading=false;
      console.log('Incidencias',this.incidencias);
    });
  }
  filtrarTipo(estatus: any) {
    this.tipoEstatus = estatus;
    this.filtrar();
  }
  filtrar() {
    console.log('tipo',this.tipoEstatus);
    this.incidenciasFiltradas = [...this.incidencias.filter((inci) => {
      return (
        (this.tipoEstatus !== 6
          ? inci.Estatus === this.tipoEstatus
          : true) 
      );
    })];
    console.log('incidencias YYY', this.incidenciasFiltradas );
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
