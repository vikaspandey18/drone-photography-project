import { Component } from '@angular/core';
import { Header } from "../../shared/header/header";
import { Footer } from "../../shared/footer/footer";
import { Testinomial } from "../../shared/testinomial/testinomial";

@Component({
  selector: 'app-about',
  imports: [Header, Footer, Testinomial],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

}
