import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ArticleCard } from '../article-card/article-card';
import { Article, ArticleData } from '../../../services/article';

@Component({
  selector: 'app-category-page',
  imports: [CommonModule, RouterModule, ArticleCard],
  templateUrl: './category-page.html',
  styleUrl: './category-page.scss'
})
export class CategoryPage implements OnInit {
  category: string = '';
  articles: ArticleData[] = [];

  constructor(
    private route: ActivatedRoute,
    private articleService: Article
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const categoryName = params.get('category');
      if (categoryName) {
        this.category = decodeURIComponent(categoryName);
        this.loadArticles();
      }
    });
  }

  private loadArticles() {
    const allArticles = this.articleService.getArticles();

    // Filter articles by category and sort by date (most recent first)
    this.articles = allArticles
      .filter(article => article.category === this.category)
      .sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;

        // Parse dates (format: "DD month YYYY")
        const dateA = new Date(a.date.split(' ').reverse().join(' '));
        const dateB = new Date(b.date.split(' ').reverse().join(' '));

        return dateB.getTime() - dateA.getTime();
      });
  }
}
