import { Component, signal } from '@angular/core';
import { Footer } from '../../shared/footer/footer';
import { Header } from '../../shared/header/header';
import { TrailerServices } from "../../shared/trailer-services/trailer-services";

@Component({
  selector: 'app-projects',
  imports: [Footer, Header, TrailerServices],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  
}
