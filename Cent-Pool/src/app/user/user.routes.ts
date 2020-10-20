import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

export const userRoutes:Routes = [
    { path:'profile', component: ProfileComponent },
    { path:'dashboard', component: DashboardComponent }
]