import { Component, Input } from '@angular/core';
import { Incidencias } from '../../interface/interface';

@Component({
  selector: 'app-incidencia-tarjeta',
  templateUrl: './incidencia-tarjeta.component.html',
  styleUrls: ['./incidencia-tarjeta.component.css']
})
export class IncidenciaTarjetaComponent  {

  
  @Input() incidencia!: Incidencias;
}
