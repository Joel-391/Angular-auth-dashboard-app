import { Routes } from '@angular/router';
import { navbarRoutes } from './navbar/navbar.routes'
import { ProfileComponent } from './pages/user/profile/profile.component';
import { FormComponent } from './auth/login/form/form.component';
import { AuthGuard } from './auth/login/login.guard';

export const routes: Routes = [
    ...navbarRoutes,
    { path: 'home', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'login', component: FormComponent },
    { path: '**', redirectTo: 'login' }
];