import { Injectable } from '@angular/core';

export interface ArticleData {
  id: number | string;
  title: string;
  videoId: string;
  excerpt: string;
  author?: string;
  date?: string;
  category?: string;
  tags?: string[];
  readTime?: string;
}

@Injectable({
  providedIn: 'root'
})
export class Article {
  private data: ArticleData[] = [
    {
      id: 1,
      title: 'Crise économique mondiale : les experts prédisent une reprise en 2026',
      videoId: 'dQw4w9WgXcQ',
      excerpt: 'Les analystes financiers s\'accordent sur une reprise progressive de l\'économie mondiale à partir de 2026, après plusieurs années de turbulences. Découvrez les secteurs qui devraient mener cette reprise.',
      author: 'Sophie Mercier',
      date: '15 septembre 2025',
      category: 'Économie',
      tags: ['économie', 'finance', 'prévisions'],
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Interview exclusive : le Premier ministre s\'exprime sur les tensions diplomatiques',
      videoId: '5NV6Rdv1a3I',
      excerpt: 'Dans cette interview exclusive, le Premier ministre aborde les récentes tensions diplomatiques et présente sa vision pour apaiser les relations internationales dans les mois à venir.',
      author: 'Marc Dupont',
      date: '14 septembre 2025',
      category: 'Politique',
      tags: ['politique', 'diplomatie', 'interview'],
      readTime: '8 min'
    },
    {
      id: 3,
      title: 'Tendances numériques 2025 : l\'IA révolutionne tous les secteurs',
      videoId: 'kxopViU98Xo',
      excerpt: 'L\'intelligence artificielle continue sa progression fulgurante et transforme profondément tous les secteurs d\'activité. Notre analyse des tendances majeures qui façonnent le paysage numérique en 2025.',
      author: 'Julie Lefèvre',
      date: '12 septembre 2025',
      category: 'Technologie',
      tags: ['technologie', 'IA', 'innovation'],
      readTime: '6 min'
    },
    {
      id: 4,
      title: 'Changement climatique : le nouveau rapport alarmant des scientifiques',
      videoId: 'jNQXAC9IVRw',
      excerpt: 'Un nouveau rapport scientifique met en lumière l\'accélération du changement climatique et ses conséquences déjà visibles. Les experts appellent à des mesures drastiques et immédiates.',
      author: 'Thomas Moreau',
      date: '10 septembre 2025',
      category: 'Environnement',
      tags: ['climat', 'environnement', 'science'],
      readTime: '7 min'
    },
    {
      id: 5,
      title: 'Les 10 films les plus attendus de la fin d\'année',
      videoId: 'UGc5Tzz19UY',
      excerpt: 'Le dernier trimestre 2025 s\'annonce riche en sorties cinématographiques. Notre sélection des 10 films à ne pas manquer, entre blockbusters et cinéma d\'auteur.',
      author: 'Émilie Renard',
      date: '8 septembre 2025',
      category: 'Culture',
      tags: ['cinéma', 'films', 'divertissement'],
      readTime: '4 min'
    },
    {
      id: 6,
      title: 'Santé : les avancées majeures dans la recherche contre le cancer',
      videoId: 'LXb3EKWsInQ',
      excerpt: 'Plusieurs équipes de recherche ont annoncé des avancées significatives dans le traitement de certains cancers. Ces découvertes pourraient changer radicalement les protocoles thérapeutiques.',
      author: 'Dr. Pierre Laurent',
      date: '5 septembre 2025',
      category: 'Santé',
      tags: ['santé', 'médecine', 'recherche'],
      readTime: '9 min'
    }
  ];

  getArticles() {
    return this.data;
  }

  getArticleById(id: number|string) {
    return this.data.find(a => +a.id === +id) ?? null;
  }
}
