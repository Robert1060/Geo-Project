import { Component, OnInit } from '@angular/core';
import RegionService from '../services/region.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
})
export class RegionsComponent implements OnInit {
  public regions: string[];

  constructor() {}

  ngOnInit(): void {
    this.regions = Object.keys(RegionService.regions);
  }
}
