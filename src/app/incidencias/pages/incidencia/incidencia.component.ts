import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Incidencias } from '../../interface/interface';
import { IncidenciaService } from '../../services/incidencia.service';
interface Estatus {
  texto: string;
  valor: number;
}

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css']
})
export class IncidenciaComponent implements OnInit {

  

  estatus:Estatus[] = [
    {texto:'Todos' ,      valor:6},
    {texto:'Reportado',   valor:0},
    {texto:'Asignado' ,   valor:1},
    {texto:'En atencion', valor:2},
    {texto:'Verificar',   valor:3},
    {texto:'Atendido',    valor:4},
    {texto:'Rechazado' ,  valor:5},
  ];
  constructor(private incidencia: IncidenciaService) { }
  opcionSeleccionado: string = this.estatus[0].texto;
  incidencias: Incidencias[] = [];
  ngOnInit(): void {

    this.incidencia.getIncidencias().subscribe(result =>{
      this.incidencias = result;
      // console.log(this.incidencias);
    });
  }

  // search(value: string) {
    
  //   let inc = this.incidencias.filter(item =>
  //     item.Estatus.includes(value)
  //   );
  //   console.log("nuevo array filtrado",inc);
  //   console.log("valor filtrado",value);
  //   return [...inc];
  // }
 


}
