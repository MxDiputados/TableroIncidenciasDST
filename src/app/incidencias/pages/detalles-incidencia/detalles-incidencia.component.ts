import { Incidencias } from './../../interface/interface';
import { IncidenciaService } from '../../services/incidencia.service';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-detalles-incidencia',
  templateUrl: './detalles-incidencia.component.html',
  styleUrls: ['./detalles-incidencia.component.css'],
})
export class DetallesIncidenciaComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private incidencia: IncidenciaService,
    public dialog: MatDialog
  ) {}
  loading: boolean = false;

  incidenciasId: Incidencias = {
    Descripcion: '',
    Observaciones: '',
    Id: 0,
    Area: '',
    Severidad: 0,
    DetalleSeveridad: '',
    FechaActualizacion: '',
    FechaHoraReporte: '',
    UsuarioAsignado: '',
    Categoria: 0,
    DetalleCategoria: '',
    Estatus: 0,
    DetalleEstatus: '',
    Sistema: '',
    DetalleSistema: '',
    Evidencia: '',
    EvidenciaB64: '',
    NombreModulo: '',
  };
  openDialog() {
    const dialogRef = this.dialog.open(EvidendiaIncidenciaDialog, {
      data: {
        Descripcion: this.incidenciasId.Descripcion,
        Evidencia: this.incidenciasId.Evidencia,
        Observaciones: this.incidenciasId.Observaciones,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe((params) => {
      // console.log(params.id);
      const id = params.id;
      console.log('esteeeeee id', id);
      this.incidencia.getIncidenciasById(id).subscribe((resp) => {
        this.incidenciasId = resp;
        console.log('this.incidenciasIdasasdasdasd', this.incidenciasId);
        setInterval(() => (this.loading = false), 450);
      });
    });
  }
}
@Component({
  selector: 'evidencia-incidencia-dialog',
  templateUrl: 'evidencia-incidencia-dialog.html',
})
export class EvidendiaIncidenciaDialog {
  constructor(
    public dialogRef: MatDialogRef<EvidendiaIncidenciaDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Incidencias
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
