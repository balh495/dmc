import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Article } from '../../../services/article';

@Component({
  selector: 'app-article-page',
  imports: [CommonModule],
  templateUrl: './article-page.html',
  styleUrl: './article-page.scss'
})
export class ArticlePage implements OnInit {
  article: any = null;
  safeUrl?: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private svc: Article,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.article = this.svc.getArticleById(id);
    if (this.article) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${this.article.videoId}`
      );
    }
  }
}
