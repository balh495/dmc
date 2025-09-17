import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Article, ArticleData } from '../../../services/article';

@Component({
  selector: 'app-article-page',
  imports: [CommonModule],
  templateUrl: './article-page.html',
  styleUrl: './article-page.scss'
})
export class ArticlePage implements OnInit {
  article: ArticleData | null = null;
  safeUrl?: SafeResourceUrl;
  thumbnailUrl?: string;

  constructor(
    private route: ActivatedRoute,
    private svc: Article,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.article = this.svc.getArticleById(id);

    if (this.article) {
      if (this.article.videoId) {
        // Generate safe URL for video embed
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${this.article.videoId}`
        );

        // Also generate thumbnail URL as fallback
        this.thumbnailUrl = `https://img.youtube.com/vi/${this.article.videoId}/hqdefault.jpg`;
      } else if (this.article.imageUrl) {
        // Use the article's image URL
        this.thumbnailUrl = this.article.imageUrl;
      } else {
        // If no videoId or imageUrl, use a placeholder image
        this.thumbnailUrl = 'assets/images/article-placeholder.jpg';
      }
    }
  }
}
