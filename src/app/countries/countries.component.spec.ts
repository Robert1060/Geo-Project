import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionCountriesComponent } from './countries.component';

describe('CountriesComponent', () => {
  let component: RegionCountriesComponent;
  let fixture: ComponentFixture<RegionCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionCountriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
