import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, of, switchMap } from 'rxjs';
import { GeoDataService } from '../services/geo-data.service';

@Component({
  selector: 'app-coutry-info',
  templateUrl: './coutry-info.component.html',
  styleUrls: ['./coutry-info.component.scss']
})
export class CountryInfoComponent implements OnInit {
  country = ''
  countryInfo$: Observable<any[]> = of([])

  constructor(private activatedRoute: ActivatedRoute, private geoService: GeoDataService) {}

  ngOnInit(): void {
    this.countryInfo$ = this.activatedRoute.params.pipe(
      map(x => x['country']),
      switchMap((country) => {
        console.log(country)
        this.country = country
        return this.geoService.getCountryInfo(country)
      })
    )
    console.log(this.country)
  }

}
