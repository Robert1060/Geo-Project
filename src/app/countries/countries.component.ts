import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  Observable,
  map,
  switchMap,
  take,
} from 'rxjs';
import { GeoDataService } from '../services/geo-data.service';
import { BaseCountryData, Regions } from '../models/model';
import { CommonModule } from '@angular/common';
import { LetModule } from '@ngrx/component';
import { LoadingComponent } from '../components/loading/loading.component';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LoadingComponent, CommonModule, RouterModule, LetModule],
})
export class RegionCountriesComponent implements OnInit {
  countries$: Observable<BaseCountryData[]>;
  region: Regions

  constructor(
    private geoService: GeoDataService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.countries$ = this.activateRoute.params.pipe(
      take(1),
      map((x) => x['region']),
      switchMap((regionName: Regions ) => {
        this.region = regionName
        return this.geoService.getCountries(regionName)
      })
    )
  }

}

