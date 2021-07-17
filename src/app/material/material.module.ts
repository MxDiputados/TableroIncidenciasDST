import { NgModule } from '@angular/core';

import { MatButtonModule  } from '@angular/material/button';  
import { MatCardModule } from '@angular/material/card'; 
import { MatListModule } from '@angular/material/list'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select'; 
import {ScrollingModule} from '@angular/cdk/scrolling';  
import {DragDropModule} from '@angular/cdk/drag-drop'; 

@NgModule({
  declarations: [],
  exports:[
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatSelectModule,
    ScrollingModule,
    DragDropModule
  ],
 
})
export class MaterialModule { }
