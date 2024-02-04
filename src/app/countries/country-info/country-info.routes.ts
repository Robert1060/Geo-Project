import { Routes } from "@angular/router";
import { AuthGuard } from "guards";


export const CountryRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./country-info.component').then((x) => x.CountryInfoComponent),
    canActivate: [AuthGuard]
  }
]