import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionsComponent } from './regions/regions.component';
import { RegionsRoutingModule } from './regions/regions-routing.module';

const routes: Routes = [
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   redirectTo: 'regions'
  // },
  {
    path: '',
    redirectTo: 'regions',
    pathMatch: 'full',
  },
  {
    path: 'regions',
    component: RegionsComponent,
  },
];

@NgModule({
  imports: [RegionsRoutingModule, RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
