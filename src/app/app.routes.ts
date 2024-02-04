import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'regions',
    pathMatch: 'full',
  },
  {
    path: 'regions',
    loadChildren: () => import('./regions/regions.route').then(routes => routes.RegionRoutes),
  },
];
