import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Regions } from '../models/model';
import { Store } from '@ngrx/store';
import { attemptToChooseRegion } from '../store/actions';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatCardModule, RouterModule, CommonModule]
})
export class RegionsComponent {
  public regions = [
    'Asia',
    'Africa',
    'Europe',
    'America',
    'Oceania',
  ] as const;

  constructor(private store: Store, private authService: AuthService) { 
    localStorage.clear()
  }

  chooseRegion(regionName: Regions) {
    this.authService.login()
    this.store.dispatch(attemptToChooseRegion({regionName}))
  }

}

