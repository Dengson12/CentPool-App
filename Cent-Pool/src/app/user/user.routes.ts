import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PoolComponent } from './pool/pool.component';
import { ProfileComponent } from './profile/profile.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { WalletComponent } from './wallet/wallet.component';

export const userRoutes: Routes = [
    {
        path: 'portal',
        component: UserPortalComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'wallet', component: WalletComponent },
            { path: 'pool', component: PoolComponent },
        ]
    }
];
