import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { RegionCountriesComponent } from './countries.component';
import { HttpClient, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { GeoDataService } from '../services/geo-data.service';
import { Observable, of } from 'rxjs';
import { BaseCountryData, Regions, RegionsV2 } from '../models/model';

describe('RegionsComponent', () => {
  let component: RegionCountriesComponent;
  let fixture: ComponentFixture<RegionCountriesComponent>;
  let router: Router;
  let location: Location;
  let activatedRouteStub: Partial<ActivatedRoute>;
  let geoDataServiceStub: Partial<GeoDataService>;

  beforeEach(waitForAsync(() => {
    activatedRouteStub = {
      params: of({ region: 'Europe' }), // Simulating 'region' route parameter
    };

    geoDataServiceStub = {
      getCountries(region: Regions): Observable<BaseCountryData[]> {
        const mockedCountries: BaseCountryData[] = [
          {name: {common: 'Country', official: 'Country'}, flag: 'test'},
          {name: {common: 'Country1', official: 'Country1'}, flag: 'test1'},
          {name: {common: 'Country2', official: 'Country2'}, flag: 'test2'}
        ]
        return of(mockedCountries);
      },
    };
  }));

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: GeoDataService, useValue: geoDataServiceStub },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionCountriesComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.autoDetectChanges();
  });
  it('Should create regions countries component', () => {
    expect(component).toBeTruthy();
  });

  it('Should have proper region url', () => {
    spyOn(location, 'path').and.returnValue('regions/:region');
    expect(location.path()).toBe('regions/:region');
  });
  it('Should have region value equal to one of Regions', () => {
    expect(component.region).toBeTruthy()
    expect(RegionsV2.includes(component.region)).toBeTrue()
  });
  it('Should have valid countries observable', () => {
    component.countries$.subscribe((countries) => {
      expect(countries).toBeTruthy()
      expect(countries.length).toBe(3)
      expect(Array.isArray(countries)).toBeTrue()
      expect(countries.every((c) => typeof c === 'object')).toBeTrue()
      expect(countries.every((c) => 'name' in c && 'flag' in c)).toBeTrue()
    })
  })
});
