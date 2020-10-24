import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';

export const userRoutes:Routes = [
    { path:'profile', component: ProfileComponent },
    { path:'edit-profile', component: EditProfileComponent },
    { path:'dashboard', component: DashboardComponent }
]