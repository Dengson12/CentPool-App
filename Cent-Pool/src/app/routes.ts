import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

export const appRoutes: Routes = [
    { path: 'home', component: MainPageComponent },
    { path: 'user', loadChildren: './user/user.module#UserModule' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
]