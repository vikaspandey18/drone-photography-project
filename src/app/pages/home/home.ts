import { Component } from '@angular/core';
import { Header } from "../../shared/header/header";
import { Footer } from "../../shared/footer/footer";
import { Testinomial } from "../../shared/testinomial/testinomial";
import { TrailerServices } from "../../shared/trailer-services/trailer-services";
import { ServiceArea } from "../../shared/service-area/service-area";

@Component({
  selector: 'app-home',
  imports: [Header, Footer, Testinomial, TrailerServices, ServiceArea],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
