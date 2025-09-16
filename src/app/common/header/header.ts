import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, DatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  menuOpen = false;
  today = new Date();

  toggle() {
    this.menuOpen = !this.menuOpen;
  }

  ngOnInit() {
    // Update the date every minute
    setInterval(() => {
      this.today = new Date();
    }, 60000);
  }
}
