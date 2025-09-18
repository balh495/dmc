import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, RouterModule, Header, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
  // This component now serves as a shell with fixed header and footer
  // The content is loaded dynamically through the router outlet
}
