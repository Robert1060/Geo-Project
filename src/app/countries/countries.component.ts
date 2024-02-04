import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { GeoDataService } from '../services/geo-data.service';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../components/loading/loading.component';
import { LetDirective } from '@ngrx/component';
import { documentFeature } from '../store/state';
import { Store } from '@ngrx/store';
import { isNotNull } from 'utils';
import { attemptToChooseCountry, loadStoredRegion } from '../store/actions';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LoadingComponent, CommonModule, RouterModule, LetDirective],
})
export class RegionCountriesComponent {
  selectedRegion$ = this.store.select(documentFeature.selectSelectedRegionName);
  countries$ = this.selectedRegion$.pipe(
    filter(isNotNull),
    switchMap((regionName) => this.geoService.getCountries(regionName))
  );

  constructor(private geoService: GeoDataService, private store: Store) {
    this.store.dispatch(loadStoredRegion());
  }

  chooseCountry(countryName: string) {
    this.store.dispatch(attemptToChooseCountry({ countryName }));
  }
}
