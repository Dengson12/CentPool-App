import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { appRoutes } from '../routes';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { userRoutes } from './user.routes';

@NgModule({
    declarations: [
        LoginComponent,
        ProfileComponent, 
        SignUpComponent],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes),
        MaterialModule
    ],
    providers: []
})
export class UserModule {
    
}