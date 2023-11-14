import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { chooseRegion } from '../store/actions';
import { Regions } from '../models/model';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegionsData } from '../services/region.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatCardModule, RouterModule, CommonModule]
})
export class RegionsComponent extends RegionsData {

  constructor(private store: Store) { super() }

  chooseRegion(regionName: Regions) {
    this.store.dispatch(chooseRegion({ regionName }));
  }
}

