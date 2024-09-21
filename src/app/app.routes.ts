import { Routes } from '@angular/router';
import { LoginComponent } from './pages/authentication/login/login.component';
import { HomeComponent } from './pages/layout/home/home.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'',
        component:HomeComponent,
        canActivate: [authGuard]
    }
];
