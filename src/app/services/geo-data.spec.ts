import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { GeoDataService } from './geo-data.service';
import { BaseCountryData, Regions } from '../models/model';

describe('GeoDataService', () => {
  let service: GeoDataService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GeoDataService],
    });
    service = TestBed.inject(GeoDataService);
    http = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    http.verify();
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('Should fetch countries by region name', () => {
    const exampleRegion: Regions = 'Europe';

    service
      .getCountries(exampleRegion)
      .subscribe((countries: BaseCountryData[]) => {
        expect(countries.length).toBeGreaterThan(0);
      });

    const req = http.expectOne(
      `${service.rootUrl}region/${exampleRegion}?fields=name,flag`
    );
    expect(req.request.method).toBe('GET');
  });

  it('Should fetch country info', () => {
    const exampleCountry = 'Poland';

    service.getCountryInfo(exampleCountry).subscribe((res) => {
      expect(res.length).toBeGreaterThan(0);
    });

    const req = http.expectOne(
      `${service.rootUrl}name/${exampleCountry}?fields=flag,name,currencies,capital,population,fifa`
    );
    expect(req.request.method).toBe('GET');
  });
});
