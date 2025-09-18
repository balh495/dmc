import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { CommonModule, registerLocaleData, DatePipe } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import localeFr from '@angular/common/locales/fr';
import { Article, ArticleData } from '../../services/article';

registerLocaleData(localeFr);

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, DatePipe, FormsModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  today = new Date();
  searchQuery: string = '';
  searchResults: ArticleData[] = [];
  showSearchResults: boolean = false;

  constructor(private articleService: Article, private router: Router) {}

  ngOnInit() {
    // Update the date every minute
    setInterval(() => {
      this.today = new Date();
    }, 60000);
  }

  onSearch(event: Event) {
    event.preventDefault();
    if (this.searchQuery.trim()) {
      this.searchResults = this.articleService.searchArticles(this.searchQuery);
      this.showSearchResults = true;
    } else {
      this.searchResults = [];
      this.showSearchResults = false;
    }
  }

  navigateToArticle(articleId: number | string) {
    this.router.navigate(['/article', articleId]);
    this.closeSearchResults();
  }

  closeSearchResults() {
    this.showSearchResults = false;
    this.searchResults = [];
  }
}
