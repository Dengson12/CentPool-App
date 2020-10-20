import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { authRoutes } from './auth.routes';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(authRoutes),
        MaterialModule
    ],
    declarations: [
        LoginComponent,
        SignUpComponent
    ],
    providers: [AuthService]
})
export class AuthModule {
     
}