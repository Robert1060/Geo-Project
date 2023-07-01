import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryInfoComponent } from './country-info/country-info.component';

const routes: Routes = [
  {
    path: 'regions/:region/:country',
    component: CountryInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
