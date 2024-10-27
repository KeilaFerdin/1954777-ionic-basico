import { Routes } from '@angular/router';
import { CamaraComponent } from './camara/camara.component'; 

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'camara', // Ruta para acceder al componente de cámara
    loadComponent: () => import('./camara/camara.component').then((m) => m.CamaraComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
