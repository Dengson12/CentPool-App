import { NgModule } from '@angular/core';
import {
  MatButtonModule, 
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatBadgeModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatExpansionModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';


 const Material = [
  MatButtonModule,
  MatProgressSpinnerModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressBarModule,
  MatBadgeModule,
  MatToolbarModule,
  MatSidenavModule,
  MatExpansionModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
 ]

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }  
