import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExternalLink {
  title: string;
  url: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-external-links-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './external-links-page.html',
  styleUrl: './external-links-page.scss'
})
export class ExternalLinksPage {
  links: ExternalLink[] = [
    // Gouvernement links
    {
      title: 'Journal Officiel du Congo',
      url: 'https://www.sgg.cg/JO/accueil.asp',
      description: 'Site officiel du Journal Officiel de la République du Congo (Congo Brazzaville).',
      category: 'Gouvernement'
    },
    {
      title: 'Ministère des Affaires Étrangères',
      url: 'https://diplomatie.gouv.cg',
      description: 'Site officiel du Ministère des Affaires Étrangères de la République du Congo.',
      category: 'Gouvernement'
    },
    {
      title: 'Ambassade du Congo en France',
      url: 'https://www.ambacongo-paris.fr',
      description: 'Site officiel de l\'Ambassade de la République du Congo en France.',
      category: 'Gouvernement'
    },
    {
      title: 'Ministère de la Communication',
      url: 'https://communication.gouv.cg',
      description: 'Site officiel du Ministère de la Communication et des Médias de la République du Congo.',
      category: 'Gouvernement'
    },

    // Médias links
    {
      title: 'Télé Congo',
      url: 'https://www.telecongo.cg',
      description: 'Chaîne de télévision nationale de la République du Congo.',
      category: 'Médias'
    },
    {
      title: 'Vox TV',
      url: 'https://www.voxtv.cg',
      description: 'Chaîne de télévision privée basée à Brazzaville, République du Congo.',
      category: 'Médias'
    },
    {
      title: 'DRTV',
      url: 'https://www.drtv.cg',
      description: 'Digital Radio Television, chaîne de télévision privée de la République du Congo.',
      category: 'Médias'
    }
  ];

  // Group links by category
  get groupedLinks(): { [key: string]: ExternalLink[] } {
    return this.links.reduce((groups, link) => {
      const category = link.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(link);
      return groups;
    }, {} as { [key: string]: ExternalLink[] });
  }

  // Get all categories
  get categories(): string[] {
    return Object.keys(this.groupedLinks);
  }
}
