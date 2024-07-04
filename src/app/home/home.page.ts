import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef<HTMLVideoElement>;

  constructor(private router: Router) {}

  playVideo() {
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    video.style.display = 'block';
    video.play();
  }

  onVideoEnded() {
    this.router.navigate(['/landing']);
  }
}
