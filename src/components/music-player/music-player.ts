import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-player.html',
  styleUrl: './music-player.css'
})
export class MusicPlayerComponent implements AfterViewInit {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  isPlaying = false;

  ngAfterViewInit() {
     this.audioPlayer.nativeElement.play();
  }

  togglePlay() {
    const audio = this.audioPlayer.nativeElement;
    if (this.isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(error => {
        console.log("El navegador bloqueó la reproducción automática, interactúa primero.");
      });
    }
    this.isPlaying = !this.isPlaying;
  }
}
