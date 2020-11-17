import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { ProfileComponent } from './profile/profile.component';
import { userRoutes } from './user.routes';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { AvatarModule } from 'ngx-avatar';
import { PoolComponent } from './pool/pool.component';
import { WalletComponent } from './wallet/wallet.component';
import { UserService } from './user.service';

@NgModule({
    declarations: [
        ProfileComponent,
        UserPortalComponent,
        DashboardComponent,
        NavMenuComponent,
        PoolComponent,
        WalletComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes),
        MaterialModule,
        AvatarModule
    ],
    providers: [
        UserService
    ]
})
export class UserModule {

}
