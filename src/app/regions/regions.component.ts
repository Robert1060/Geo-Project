import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import RegionService from '../services/region.service';
import { Store } from '@ngrx/store';
import { chooseRegion } from './regions-store/regions-actions';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionsComponent implements OnInit {
  public regions: string[];

  constructor(private store: Store) {}

  chooseRegion(regionName: string) {
    this.store.dispatch(chooseRegion({ regionName }));
  }

  ngOnInit(): void {
    this.regions = Object.keys(RegionService.regions);
  }
}
