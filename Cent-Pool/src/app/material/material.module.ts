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
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule
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
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule
 ]

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }  
