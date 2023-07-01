import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isRootPage: boolean;
  subs: Subscription;

  constructor(private location: Location, private router: Router) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.subs = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isRootPage = this.router.url === '/regions';
      }
    });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
