import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './_interceptors/auth.interceptor';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideToastr } from 'ngx-toastr'; // Importa ToastrModule
import { MatIconModule } from '@angular/material/icon'; // Importa MatIconModule
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideMarkdown } from 'ngx-markdown';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideToastr(),
    provideHttpClient(
      withFetch(), // Utilizza l'API Fetch invece di XMLHttpRequests
      withInterceptors([authInterceptor])
    ),
    MatIconModule,
    provideAnimations(),
    provideAnimationsAsync(),
    provideMarkdown()
  ]
};
