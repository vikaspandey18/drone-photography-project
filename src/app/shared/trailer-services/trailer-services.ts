import { Component, signal } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-trailer-services',
  imports: [CarouselModule],
  templateUrl: './trailer-services.html',
  styleUrl: './trailer-services.scss',
})
export class TrailerServices {
  customOptions: OwlOptions = {
    items: 3,
    autoplay: true,
    margin: 30,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    nav: true,
  };
  slidesStore = signal<any[]>([
    {
      id: 'slide-1',
      text: 'Drone Inspection team from Terra Drone',
      src: 'assets/img/gallery/services4.png',
    },
    {
      id: 'slide-2',
      text: 'Commercial Real Estate Photography',
      src: 'assets/img/gallery/services5.png',
    },
    {
      id: 'slide-3',
      text: 'Construction Site Monitoring',
      src: 'assets/img/gallery/services6.png',
    },
    {
      id: 'slide-4',
      text: 'Commercial Real Estate Photography',
      src: 'assets/img/gallery/services5.png',
    },
  ]);
}
