import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, finalize, map, switchMap, take } from 'rxjs';
import { GeoDataService } from '../services/geo-data.service';
import { BaseCountryData } from '../models/model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionCountriesComponent implements OnInit {
  countries$: Observable<BaseCountryData[]>;
  region: string;
  isDataLoading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private geoService: GeoDataService
  ) {}

  ngOnInit(): void {
    this.countries$ = this.activatedRoute.params.pipe(
      take(1),
      map((x) => x['region']),
      switchMap((region: string) => {
        this.region = region;
        const countries$ = this.geoService.getCountries(region);
        return countries$;
      }),
      finalize(() => (this.isDataLoading = false))
    );
  }
}
