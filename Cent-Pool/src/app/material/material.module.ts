import { NgModule } from '@angular/core';
import {
  MatButtonModule, 
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule 
} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge'
import {MatProgressBarModule} from '@angular/material/progress-bar';


 const Material =[
  MatButtonModule,
  MatProgressSpinnerModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressBarModule,
  MatBadgeModule,
  MatToolbarModule
 ]
@NgModule({
  imports: [
    Material  
  ],
  exports:[Material]
})
export class MaterialModule { }  
