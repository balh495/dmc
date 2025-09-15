import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-article-card',
  imports: [CommonModule],
  templateUrl: './article-card.html',
  styleUrl: './article-card.scss'
})
export class ArticleCard implements OnInit {
    @Input() article!: { 
      id: number|string; 
      title: string; 
      videoId: string; 
      excerpt?: string; 
    };

  safeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}
  
  ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.article.videoId}`
    );
  }
}
