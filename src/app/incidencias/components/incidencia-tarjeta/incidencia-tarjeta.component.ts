import { Component, Input } from '@angular/core';
import { Incidencias } from '../../interface/interface';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EvidendiaIncidenciaDialog } from '../../pages/detalles-incidencia/detalles-incidencia.component';

@Component({
  selector: 'app-incidencia-tarjeta',
  templateUrl: './incidencia-tarjeta.component.html',
  styleUrls: ['./incidencia-tarjeta.component.css']
})
export class IncidenciaTarjetaComponent  {

  
  @Input() incidencia!: Incidencias;
  constructor(public dialog: MatDialog){}
  openDialog() {
    const dialogRef = this.dialog.open(EvidendiaIncidenciaDialog, {
      data: {
        Descripcion: this.incidencia.Descripcion,
        Evidencia: this.incidencia.Evidencia,
        Observaciones: this.incidencia.Observaciones,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

