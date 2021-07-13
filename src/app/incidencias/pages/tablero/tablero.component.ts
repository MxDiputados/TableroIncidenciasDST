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

    estatus:Estatus[] = [
    {texto:'Reportado',   valor:0},
    {texto:'Asignado' ,   valor:1},
    {texto:'En atencion', valor:2},
    {texto:'Verificar',   valor:3},
    {texto:'Atendido',    valor:4},
    {texto:'Rechazado' ,  valor:5},
  ];
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
   reportado:any;
   reportados:[] = [];
  constructor(private incidencia: IncidenciaService) { }

  ngOnInit(): void {
    this.incidencia.getIncidencias().subscribe(result =>{
      this.incidencias = result;
      console.log(this.incidencias);

      // for (const rep of this.incidencias) {
      //   this.reportado = rep.Estatus;
      //   // this.reportados.push(this.reportado);
        
      

      // }
      
      // this.reportados  = this.incidencias.filter(rep => rep.Estatus === "Reportados")
      // console.log("reportados ",reportados);
    });
  }

}