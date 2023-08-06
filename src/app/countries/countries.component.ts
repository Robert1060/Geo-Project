import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, finalize, map, of, switchMap, take } from 'rxjs';
import { GeoDataService } from '../services/geo-data.service';
import { BaseCountryData } from '../models/model';
import { Store } from '@ngrx/store';
import { regionsFeature } from '../regions/regions-store/regions.reducer';
import { inject } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionCountriesComponent implements OnInit {
  private store = inject(Store);
  countries$: Observable<BaseCountryData[]>;
  isDataLoading: boolean = true;
  selectedRegion$: Observable<string>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private geoService: GeoDataService
  ) {
    this.selectedRegion$ = this.store.select(regionsFeature.selectRegionsState);
  }

  ngOnInit(): void {
    this.countries$ = this.activatedRoute.params.pipe(
      take(1),
      map((x) => x['region']),
      switchMap((region: string) => {
        // this.region = region;
        const countries$ = this.geoService.getCountries(region);
        return countries$;
      }),
      finalize(() => (this.isDataLoading = false))
    );
  }
}
