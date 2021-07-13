import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./incidencias/incidencias.module').then(m => m.IncidenciasModule)
  },
  {
    path:'**',
    redirectTo:''
  }
] 


@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
