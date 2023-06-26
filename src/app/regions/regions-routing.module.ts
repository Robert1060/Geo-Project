import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionsComponent } from './regions.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { RegionCountriesComponent } from '../countries/countries.component';

const routes: Routes = [
  {
    path: 'regions/:region',
    component: RegionCountriesComponent
  }
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionsRoutingModule { }
