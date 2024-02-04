import { Routes } from "@angular/router";

export const RegionRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./regions.component').then((x) => x.RegionsComponent)
  },
  {
    path: ':region',
    loadChildren: () => import('../countries/countries.routes').then(r => r.CountryRoutes)
  }
]