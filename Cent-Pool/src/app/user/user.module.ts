import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { ProfileComponent } from './profile/profile.component';
import { userRoutes } from './user.routes';
import { UserPortalComponent } from './user-portal/user-portal.component';

@NgModule({
    declarations: [
        ProfileComponent,
        UserPortalComponent,
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