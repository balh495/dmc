import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  photoUrl: string;
  description?: string;
}

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss'
})
export class AboutPage {
  teamMembers: TeamMember[] = [
    {
      name: 'Jean Dupont',
      role: 'Directeur de la rédaction',
      photoUrl: 'assets/images/team/jean-dupont.jpg',
      description: 'Journaliste expérimenté avec plus de 15 ans dans les médias congolais.'
    },
    {
      name: 'Marie Mbemba',
      role: 'Rédactrice en chef',
      photoUrl: 'assets/images/team/marie-mbemba.jpg',
      description: 'Spécialiste des questions politiques et économiques en Afrique centrale.'
    },
    {
      name: 'Paul Moukila',
      role: 'Responsable technique',
      photoUrl: 'assets/images/team/paul-moukila.jpg',
      description: 'Expert en technologies numériques et développement web.'
    },
    {
      name: 'Sophie Loko',
      role: 'Responsable marketing',
      photoUrl: 'assets/images/team/sophie-loko.jpg',
      description: 'Spécialiste en communication digitale et stratégies de contenu.'
    }
  ];
}
