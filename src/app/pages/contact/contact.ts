import { Component } from '@angular/core';
import { Footer } from '../../shared/footer/footer';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-contact',
  imports: [Footer, Header],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
