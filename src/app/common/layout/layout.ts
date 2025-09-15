import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ArticleCard } from '../../features/articles/article-card/article-card';
import { ArticleList } from '../../features/articles/article-list/article-list';

import { Article } from '../../services/article';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, Header, Footer, ArticleCard, ArticleList],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
  articleService = inject(Article);
  articles = this.articleService.getArticles();
  
}
