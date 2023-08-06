import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, finalize, map, of, switchMap, take } from 'rxjs';
import { GeoDataService } from '../../services/geo-data.service';
import { Currency, ExtendedCountryData } from '../../models/model';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryInfoComponent implements OnInit {
  country: string;
  countryInfo$: Observable<ExtendedCountryData[]>;
  isDataLoading: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private geoService: GeoDataService
  ) {}

  getCurrency(countryInfo: ExtendedCountryData): Currency {
    return countryInfo.currencies[Object.keys(countryInfo.currencies)[0]];
  }

  convertToMillions(
    people: number,
    decimalPlaces: number,
    round: boolean
  ): string {
    let result = people / 1000000;

    if (round) {
      result =
        Math.round(result * Math.pow(10, decimalPlaces)) /
        Math.pow(10, decimalPlaces);
    } else {
      result = Number(result.toFixed(decimalPlaces));
    }
    return `${result} mln`;
  }

  ngOnInit(): void {
    this.countryInfo$ = this.activatedRoute.params.pipe(
      take(1),
      map((x) => x['country']),
      switchMap((country) => {
        this.country = country;
        return this.geoService.getCountryInfo(country);
      }),
      finalize(() => (this.isDataLoading = false))
    );
  }
}
