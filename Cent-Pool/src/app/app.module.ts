import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainPageComponent } from './main-page/main-page.component';
import { DashboardComponent } from './main-page/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RoutesDisplayComponent } from './main-page/routes-display/routes-display.component';
import {UserPortalComponent} from './user/user-portal/user-portal.component';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UserPortalComponent,
    DashboardComponent,
    NavMenuComponent,
    RoutesDisplayComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    MatGridListModule,
    AvatarModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
