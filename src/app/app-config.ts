import { ApplicationConfig } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import * as fromRegions from './regions/regions-store/regions.reducer';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app-routing.module';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideRouter(routes),
    provideStore(),
    provideState(fromRegions.regionsFeature),
    provideAnimations(),
  ],
};
