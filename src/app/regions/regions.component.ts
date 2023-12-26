import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

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

  constructor() { }
}

