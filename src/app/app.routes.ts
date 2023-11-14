import { Routes } from '@angular/router';
import { RegionsComponent } from './regions/regions.component';
import { RegionCountriesComponent } from './countries/countries.component';
import { CountryInfoComponent } from './countries/country-info/country-info.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'regions',
    pathMatch: 'full',
  },
  {
    path: 'regions',
    component: RegionsComponent,
  },
  {
    path: 'regions/:region',
    pathMatch: 'full',
    component: RegionCountriesComponent,
  },
  {
    path: 'regions/:region/:country',
    pathMatch: 'full',
    component: CountryInfoComponent,
  },
];
