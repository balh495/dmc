import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-article-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './article-list.html',
  styleUrl: './article-list.scss'
})
export class ArticleList {
  @Input() articles: any[] = [];
}
