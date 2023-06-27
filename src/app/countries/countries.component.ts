import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, of, switchMap } from 'rxjs';
import { GeoDataService } from '../services/geo-data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionCountriesComponent implements OnInit {
  countries$: Observable<any[]> = of([])
  region: string = ''
  loading = true

  constructor(private activatedRoute: ActivatedRoute, private geoService: GeoDataService) {}

  ngOnInit(): void {
    this.countries$ = this.activatedRoute.params.pipe(
      map(x => x['region']),
      switchMap((region) => {
        this.region = region
        const countries$ = this.geoService.getCountries(region)
        this.loading = false
        return countries$
      } 
      )
    )
  }
}
