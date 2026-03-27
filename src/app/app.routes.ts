import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../components/letter/letter')
        .then(m => m.LetterComponent)
  }
];
