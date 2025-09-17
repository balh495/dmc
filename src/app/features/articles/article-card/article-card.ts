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
  thumbnailUrl!: string;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.article.videoId) {
      // Generate YouTube thumbnail URL from videoId
      this.thumbnailUrl = `https://img.youtube.com/vi/${this.article.videoId}/mqdefault.jpg`;

      // Create safeUrl for potential use in article page
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${this.article.videoId}`
      );
    } else if (this.article.imageUrl) {
      // Use provided image URL
      this.thumbnailUrl = this.article.imageUrl;
    } else {
      // Fallback to a placeholder image
      this.thumbnailUrl = 'assets/images/article-placeholder.jpg';
    }
  }
}
