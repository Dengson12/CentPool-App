import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import {RoutesDisplayComponent} from './main-page/routes-display/routes-display.component'
import { DashboardComponent } from './main-page/dashboard/dashboard.component';
import {UserPortalComponent} from './user/user-portal/user-portal.component'

export const appRoutes: Routes = [
    {path:'routes', component:RoutesDisplayComponent},
    { path: 'home', component: MainPageComponent },
    {path: 'portal', component: UserPortalComponent},
    {path: 'dashboard', component: DashboardComponent},
    { path: 'user', loadChildren: './user/user.module#UserModule' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
]