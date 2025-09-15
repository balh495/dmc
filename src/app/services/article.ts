import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Article {
  private data = [
    { id: 1, title: 'Crise économique mondiale', videoId: 'dQw4w9WgXcQ', excerpt: 'Résumé rapide...' },
    { id: 2, title: 'Interview géopolitique', videoId: '5NV6Rdv1a3I', excerpt: 'Interview exclusive...' },
    { id: 3, title: 'Tendances numériques 2025', videoId: 'kxopViU98Xo', excerpt: 'Les grandes tendances...' }
  ];

  getArticles() { 
    return this.data; 
  }

  getArticleById(id: number|string) {
    return this.data.find(a => +a.id === +id) ?? null;
  }
}
