import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ArticleCard } from '../../features/articles/article-card/article-card';
import { ArticleList } from '../../features/articles/article-list/article-list';

import { Article, ArticleData } from '../../services/article';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, RouterModule, Header, Footer, ArticleCard, ArticleList],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit {
  articleService = inject(Article);
  articles = this.articleService.getArticles();
  categories: string[] = [];

  ngOnInit() {
    // Extract unique categories from articles
    const categorySet = new Set<string>();
    this.articles.forEach(article => {
      if (article.category) {
        categorySet.add(article.category);
      }
    });
    this.categories = Array.from(categorySet);
  }

  getArticlesByCategory(category: string, limit: number = 3): ArticleData[] {
    // Filter articles by category
    const filteredArticles = this.articles.filter(article => article.category === category);

    // Sort by date (most recent first)
    const sortedArticles = filteredArticles.sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;

      // Parse dates (format: "DD month YYYY")
      const dateA = new Date(a.date.split(' ').reverse().join(' '));
      const dateB = new Date(b.date.split(' ').reverse().join(' '));

      return dateB.getTime() - dateA.getTime();
    });

    // Return limited number of articles
    return sortedArticles.slice(0, limit);
  }

  getAllArticlesByCategory(category: string): ArticleData[] {
    // Filter articles by category
    const filteredArticles = this.articles.filter(article => article.category === category);

    // Sort by date (most recent first)
    return filteredArticles.sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;

      // Parse dates (format: "DD month YYYY")
      const dateA = new Date(a.date.split(' ').reverse().join(' '));
      const dateB = new Date(b.date.split(' ').reverse().join(' '));

      return dateB.getTime() - dateA.getTime();
    });
  }
}
