import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  constructor(private router: Router) {}

  goTofirstDate() {
    this.router.navigateByUrl('/firstDate');
  }

  ngOnInit() {
  }

}
