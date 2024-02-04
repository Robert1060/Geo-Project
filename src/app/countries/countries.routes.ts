import { Routes } from "@angular/router";
import { AuthGuard } from "guards";


export const CountryRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./countries.component').then((x) => x.RegionCountriesComponent),
    canActivate: [AuthGuard]
  },
  {
    path: ':country',
    loadChildren: () => import('./country-info/country-info.routes').then((r) => r.CountryRoutes)
  }
]