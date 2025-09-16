import { Component, LOCALE_ID , OnInit } from '@angular/core';
import { CommonModule, registerLocaleData , DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

import localeFr from '@angular/common/locales/fr';


registerLocaleData(localeFr);

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, DatePipe],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  today = new Date();

  ngOnInit() {
    // Update the date every minute
    setInterval(() => {
      this.today = new Date();
    }, 60000);
  }
}
