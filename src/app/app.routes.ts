import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { DocentesComponent } from './pages/docentes/docentes.component';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent

    },
    {
        path: 'login',
        component: LoginComponent

    },
    {
        path: 'estudiantes',
        component: EstudiantesComponent,
        canActivate:[loginGuard]

       
    },
    {
        path: 'docentes',
        component: DocentesComponent,
        canActivate:[loginGuard]
       
    },

    {path:'',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
