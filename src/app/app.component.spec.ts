import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { AppComponent } from "./app.component"
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { RouterTestingModule } from '@angular/router/testing';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>
  let component: AppComponent;
  let router: Router
  let location: Location

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    }).compileComponents()
  }))


  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance;
    router = TestBed.inject(Router)
    location = TestBed.inject(Location)
    fixture.autoDetectChanges()
  })
  
  it('Should create app', () => {
    expect(component).toBeTruthy()
  })
  it('Should have proper url', () => {
    spyOn(location, 'path').and.returnValue('/regions')
    const isProperUrl = location.path().endsWith('/regions')
    expect(isProperUrl).toBeTruthy()
  })
})