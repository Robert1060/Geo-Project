import { Component, OnInit } from '@angular/core';
import { Region, Regions } from '../models/model';
import RegionService from '../services/region.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
  public regions: string[] | [] = []

  constructor(private router: Router) {}

  navigate(regionName: string) {
    this.router.navigate([regionName])
  }





  ngOnInit(): void {
    this.regions = Object.keys(RegionService.regions)
  }
}
