import { Component } from '@angular/core';
import { Footer } from "../../shared/footer/footer";
import { Header } from "../../shared/header/header";
import { Testinomial } from "../../shared/testinomial/testinomial";

@Component({
  selector: 'app-services',
  imports: [Footer, Header, Testinomial],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {

}
