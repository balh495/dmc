import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ArticleData } from '../../../services/article';

@Component({
  selector: 'app-article-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './article-card.html',
  styleUrl: './article-card.scss'
})
export class ArticleCard implements OnInit {
  @Input() article!: ArticleData;

  safeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.article.videoId}`
    );
  }
}
