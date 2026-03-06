import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home';
import { TextComponent } from './components/pages/texto/texto';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'text', component: TextComponent }
];
