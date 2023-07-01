import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionCountriesComponent } from '../countries/countries.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { CountriesRoutingModule } from '../countries/countries-routing.module';

const routes: Routes = [
  {
    path: 'regions/:region',
    pathMatch: 'full',
    component: RegionCountriesComponent,
  },
];

@NgModule({
  imports: [CountriesRoutingModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionsRoutingModule {}
