import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowerComponent } from '../flower/flower';
import { MusicPlayerComponent } from '../music-player/music-player';

@Component({
  selector: 'app-letter',
  imports: [CommonModule, FlowerComponent, MusicPlayerComponent],
  templateUrl: './letter.html',
  styleUrl: './letter.css',
  standalone: true,
})
export class LetterComponent {}
