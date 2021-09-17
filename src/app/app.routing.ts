import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import {DashboardComponent} from './dashboard';
import { HeadersComponent} from './headers'

const appRoutes: Routes = [
    { path: '', component: HeadersComponent,canActivate: [AuthGuard],
    children: [
    { path: '', component: HomeComponent },
    { path: 'home', component: DashboardComponent},
    ]},


    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);