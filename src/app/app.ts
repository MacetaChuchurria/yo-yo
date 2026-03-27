import { Component } from '@angular/core';
import { LetterComponent } from '../components/letter/letter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LetterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}
