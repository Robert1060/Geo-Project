import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, map, switchMap, take } from 'rxjs';
import { GeoDataService } from '../../services/geo-data.service';
import { Currency, ExtendedCountryData } from '../../models/model';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { ActivatedRoute } from '@angular/router';
import { LetDirective } from '@ngrx/component';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LoadingComponent, CommonModule, LetDirective]
})
export class CountryInfoComponent implements OnInit {
  public country: string
  public countryInfo$:Observable<ExtendedCountryData[]>
  constructor(
    private geoService: GeoDataService,
    private activatedRoute: ActivatedRoute
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
        this.country = country
        return this.geoService.getCountryInfo(country)
      })
    )
  }
}
