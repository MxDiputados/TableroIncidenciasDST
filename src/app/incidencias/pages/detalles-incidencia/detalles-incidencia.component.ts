import { Incidencias } from './../../interface/interface';
import { IncidenciaService } from '../../services/incidencia.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-incidencia',
  templateUrl: './detalles-incidencia.component.html',
  styleUrls: ['./detalles-incidencia.component.css']
})
export class DetallesIncidenciaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private incidencia: IncidenciaService ) { }
  loading: boolean = false;

  incidenciasId: Incidencias = {
    Descripcion:'', 
    Observaciones:'',
    Id:0,
    Area:'',
    Severidad:'',
    FechaActualizacion:'',
    FechaHoraReporte:'', 
    UsuarioAsignado:'', 
    Categoria:'',
    Estatus:'' 
  };
  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe(params => {
      // console.log(params.id);
      const id = params.id;
      console.log('esteeeeee id', id);
      this.incidencia.getIncidenciasById(id).subscribe((resp) => {
        this.incidenciasId = resp;
        console.log("this.incidenciasIdasasdasdasd",this.incidenciasId);
        setInterval(() => this.loading = false,450);
      })
    });
  }

}
