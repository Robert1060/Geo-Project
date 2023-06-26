import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, of, switchMap } from 'rxjs';
import { GeoDataService } from '../services/geo-data.service';
import { ExtendedCountry } from '../models/model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class RegionCountriesComponent implements OnInit {
  countries$: Observable<ExtendedCountry[]> = of([])

  constructor(private activatedRoute: ActivatedRoute, private geoService: GeoDataService) {}

  ngOnInit(): void {
    this.countries$ = this.activatedRoute.params.pipe(
      map(x => x['region']),
      switchMap((region) => 
        // console.log(this.geoService.getCountries(region))
        this.geoService.getCountries(region)
      )
    )
    this.countries$.subscribe((x:any) => console.log(x))
  }
}
