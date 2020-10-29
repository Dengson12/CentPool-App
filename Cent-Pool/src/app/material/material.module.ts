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
  MatGridListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatMenuModule
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
  MatGridListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatMenuModule,
 ];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
