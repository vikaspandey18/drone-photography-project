import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { signal } from '@angular/core';

@Component({
  selector: 'app-service-area',
  imports: [CarouselModule],
  templateUrl: './service-area.html',
  styleUrl: './service-area.scss',
})
export class ServiceArea {
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
    nav: false,
  };
  slidesStore = signal<any[]>([
    {
      id: 'slide-1',
      text: 'Residential Real Estate Photography',
      src: 'assets/img/gallery/services1.png',
      para: 'Aute irure dolor inasfa reprehenderit in voluptate velit esse cillum reeut cupidatatfug nulla pariatur.',
    },
    {
      id: 'slide-2',
      text: 'Commercial Real Estate Photography',
      src: 'assets/img/gallery/services2.png',
      para: 'Aute irure dolor inasfa reprehenderit in voluptate velit esse cillum reeut cupidatatfug nulla pariatur.',
    },
    {
      id: 'slide-3',
      text: 'Construction Site Monitoring',
      src: 'assets/img/gallery/services3.png',
      para: 'Aute irure dolor inasfa reprehenderit in voluptate velit esse cillum reeut cupidatatfug nulla pariatur.',
    },
    {
      id: 'slide-4',
      text: 'Commercial Real Estate Photography',
      src: 'assets/img/gallery/services2.png',
      para: 'Aute irure dolor inasfa reprehenderit in voluptate velit esse cillum reeut cupidatatfug nulla pariatur.',
    },
  ]);
}
