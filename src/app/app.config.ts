import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home';
import { TextComponent } from './components/pages/texto/texto';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'message', component: TextComponent },
  { path: '**', redirectTo: '' }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
