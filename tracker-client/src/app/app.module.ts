import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { SignupComponent } from './signup/signup.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { ChatComponent } from './chat/chat.component';

import { MapService } from "./services/map.service";
import { AuthService } from "./services/auth.service";
import { GeocodeService } from "./services/geocode.service";

import { AuthGuard } from './services/auth-guard.service';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup',      component: SignupComponent },
  { path: 'map',      component: MapComponent , canActivate: [AuthGuard]},
  { path: 'admin',      component: DeviceListComponent, canActivate: [AuthGuard] },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapComponent,
    SignupComponent,
    DeviceListComponent,
    ChatComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [MapService, AuthGuard, AuthService, GeocodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
