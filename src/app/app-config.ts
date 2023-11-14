import { ApplicationConfig } from '@angular/platform-browser';
import { StoreRootModule, provideState, provideStore } from '@ngrx/store';
import * as fromRegions from './store/reducer';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { ErrorHandler, Injector, NgZone, importProvidersFrom } from '@angular/core';
import { CustomErrorHandler } from './handlers/custom-error-handler';
import { GlobalHttpErrorHandlerInterceptor } from './handlers/global-http-error-handler.interceptor';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState(fromRegions.documentFeature),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatSnackBarModule),
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpErrorHandlerInterceptor,
      multi: true
    }
  ],
};
