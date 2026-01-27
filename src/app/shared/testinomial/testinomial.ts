import { Component, signal } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testinomial',
  imports: [CarouselModule],
  templateUrl: './testinomial.html',
  styleUrl: './testinomial.scss',
})
export class Testinomial {
  customOptions: OwlOptions = {
    items: 1,
    autoplay: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    nav: false,
  };

  slidesStore = signal<any[]>([
    {
      id: 'slide-1',
      text: 'The automated process starts as soon as your clothe go into the machine. This site outcome is gleaming clothe. Placeholder text commonly used. In publishing and graphic.',
      src: 'assets/img/icon/quotes-sign.png',
      founderImg: 'assets/img/icon/testimonial.png',
      founderName: 'Robart Brown',
      founderTitle: 'Creative designer at Colorlib',
    },
    {
      id: 'slide-2',
      text: 'The automated process starts as soon as your clothe go into the machine. This site outcome is gleaming clothe. Placeholder text commonly used. In publishing and graphic. Real Estate Photography',
      src: 'assets/img/icon/quotes-sign.png',
      founderImg: 'assets/img/icon/testimonial.png',
      founderName: 'Robart Brown',
      founderTitle: 'Creative designer at Colorlib',
    },
    {
      id: 'slide-3',
      text: 'The automated process starts as soon as your clothe go into the machine. This site outcome is gleaming clothe. Placeholder text commonly used. In publishing and graphic.',
      src: 'assets/img/icon/quotes-sign.png',
      founderImg: 'assets/img/icon/testimonial.png',
      founderName: 'Robart Brown',
      founderTitle: 'Creative designer at Colorlib',
    },
  ]);
}
