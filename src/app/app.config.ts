import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { productsReducer } from '@home-inventory/products';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideStore({ products: productsReducer }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
  ],
};
