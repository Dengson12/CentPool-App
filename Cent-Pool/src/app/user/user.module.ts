import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { userRoutes } from './user.routes';

@NgModule({
    declarations: [
        ProfileComponent,
        DashboardComponent,
        EditProfileComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes),
        MaterialModule
    ],
    providers: []
})
export class UserModule {
    
}