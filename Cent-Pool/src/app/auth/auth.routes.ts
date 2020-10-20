import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const authRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: SignUpComponent }
]