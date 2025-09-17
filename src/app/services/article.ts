import { Injectable } from '@angular/core';

export interface ArticleData {
  id: number | string;
  title: string;
  videoId?: string;
  imageUrl?: string;
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
    // Économie articles
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
      id: 7,
      title: 'Les marchés boursiers atteignent des sommets historiques',
      imageUrl: 'assets/images/finance-market.jpg',
      excerpt: 'Malgré les incertitudes économiques, les marchés boursiers mondiaux continuent leur ascension et battent de nouveaux records. Analyse des facteurs qui expliquent cette tendance paradoxale.',
      author: 'Jean Dupuis',
      date: '14 septembre 2025',
      category: 'Économie',
      tags: ['bourse', 'investissement', 'finance'],
      readTime: '4 min'
    },
    {
      id: 8,
      title: 'Inflation : comment protéger son pouvoir d\'achat',
      videoId: 'jGqrvn3q1oo',
      excerpt: 'Face à la hausse continue des prix, quelles stratégies adopter pour préserver son pouvoir d\'achat ? Nos experts vous livrent leurs conseils pratiques et leurs recommandations d\'investissement.',
      author: 'Sophie Mercier',
      date: '10 septembre 2025',
      category: 'Économie',
      tags: ['inflation', 'pouvoir d\'achat', 'conseils'],
      readTime: '7 min'
    },
    {
      id: 9,
      title: 'Cryptomonnaies : le Bitcoin atteint un nouveau record',
      imageUrl: 'assets/images/bitcoin.jpg',
      excerpt: 'Le Bitcoin a franchi un nouveau seuil historique cette semaine. Retour sur les raisons de cette hausse spectaculaire et perspectives pour les investisseurs.',
      author: 'Marc Lefort',
      date: '5 septembre 2025',
      category: 'Économie',
      tags: ['bitcoin', 'cryptomonnaie', 'investissement'],
      readTime: '6 min'
    },
    {
      id: 10,
      title: 'Réforme fiscale : ce qui va changer pour les entreprises',
      imageUrl: 'assets/images/tax-reform.jpg',
      excerpt: 'La nouvelle réforme fiscale entrera en vigueur le mois prochain. Décryptage des principales mesures et de leur impact sur les entreprises de toutes tailles.',
      author: 'Claire Dubois',
      date: '1 septembre 2025',
      category: 'Économie',
      tags: ['fiscalité', 'entreprises', 'réforme'],
      readTime: '8 min'
    },

    // Politique articles
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
      id: 11,
      title: 'Élections régionales : les résultats du premier tour',
      imageUrl: 'assets/images/elections.jpg',
      excerpt: 'Les résultats du premier tour des élections régionales sont tombés hier soir. Analyse des tendances et des surprises de ce scrutin qui redessine le paysage politique local.',
      author: 'Lucie Martin',
      date: '13 septembre 2025',
      category: 'Politique',
      tags: ['élections', 'régionales', 'résultats'],
      readTime: '6 min'
    },
    {
      id: 12,
      title: 'Réforme constitutionnelle : les points de blocage',
      videoId: 'QH2-TGUlwu4',
      excerpt: 'Le projet de réforme constitutionnelle se heurte à plusieurs obstacles. Décryptage des principaux points de désaccord et des positions des différents partis politiques.',
      author: 'Marc Dupont',
      date: '10 septembre 2025',
      category: 'Politique',
      tags: ['constitution', 'réforme', 'débat'],
      readTime: '9 min'
    },
    {
      id: 13,
      title: 'Manifestations : mobilisation record dans tout le pays',
      imageUrl: 'assets/images/protests.jpg',
      excerpt: 'Des centaines de milliers de personnes ont manifesté hier dans plusieurs villes. Retour sur cette journée de mobilisation et sur les revendications des manifestants.',
      author: 'Sarah Benali',
      date: '5 septembre 2025',
      category: 'Politique',
      tags: ['manifestations', 'social', 'mobilisation'],
      readTime: '5 min'
    },
    {
      id: 14,
      title: 'Politique étrangère : nouvelles alliances stratégiques',
      imageUrl: 'assets/images/diplomacy.jpg',
      excerpt: 'Le gouvernement a annoncé la signature de plusieurs accords diplomatiques majeurs. Analyse des enjeux et des conséquences de ces nouvelles alliances sur l\'échiquier international.',
      author: 'Paul Durand',
      date: '1 septembre 2025',
      category: 'Politique',
      tags: ['diplomatie', 'international', 'alliances'],
      readTime: '7 min'
    },

    // Technologie articles
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
      id: 15,
      title: 'Le nouveau smartphone pliable qui fait sensation',
      imageUrl: 'assets/images/foldable-phone.jpg',
      excerpt: 'Ce nouveau smartphone à écran pliable repousse les limites de l\'innovation. Test complet, performances, autonomie : notre verdict sur ce bijou technologique.',
      author: 'Thomas Blanc',
      date: '11 septembre 2025',
      category: 'Technologie',
      tags: ['smartphone', 'innovation', 'test'],
      readTime: '8 min'
    },
    {
      id: 16,
      title: 'Cybersécurité : la nouvelle menace qui inquiète les experts',
      videoId: 'L_jWHffIx5E',
      excerpt: 'Une nouvelle forme de cyberattaque se propage à travers le monde. Découvrez comment fonctionne cette menace et les moyens de s\'en protéger efficacement.',
      author: 'Julie Lefèvre',
      date: '8 septembre 2025',
      category: 'Technologie',
      tags: ['cybersécurité', 'hacking', 'protection'],
      readTime: '7 min'
    },
    {
      id: 17,
      title: 'Réalité virtuelle : révolution dans le monde du travail',
      imageUrl: 'assets/images/vr-work.jpg',
      excerpt: 'La réalité virtuelle s\'impose progressivement dans le monde professionnel. Reportage sur ces entreprises qui ont adopté cette technologie pour transformer leur façon de travailler.',
      author: 'Nicolas Petit',
      date: '5 septembre 2025',
      category: 'Technologie',
      tags: ['réalité virtuelle', 'travail', 'innovation'],
      readTime: '5 min'
    },
    {
      id: 18,
      title: 'Voitures autonomes : où en est-on réellement ?',
      imageUrl: 'assets/images/autonomous-car.jpg',
      excerpt: 'Entre promesses des constructeurs et réalité technique, quel est l\'état actuel du développement des voitures autonomes ? Notre enquête fait le point sur cette technologie d\'avenir.',
      author: 'Marie Dumas',
      date: '1 septembre 2025',
      category: 'Technologie',
      tags: ['voiture autonome', 'transport', 'innovation'],
      readTime: '9 min'
    },

    // Environnement articles
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
      id: 19,
      title: 'Énergies renouvelables : record de production mondial',
      imageUrl: 'assets/images/renewable-energy.jpg',
      excerpt: 'Pour la première fois, les énergies renouvelables ont dépassé les énergies fossiles dans la production mondiale d\'électricité. Un tournant historique dans la transition énergétique.',
      author: 'Léa Rousseau',
      date: '9 septembre 2025',
      category: 'Environnement',
      tags: ['énergie', 'renouvelable', 'transition'],
      readTime: '6 min'
    },
    {
      id: 20,
      title: 'Biodiversité : découverte d\'espèces inconnues en Amazonie',
      videoId: 'hC8CH0Z3L54',
      excerpt: 'Une expédition scientifique en Amazonie a permis de découvrir plusieurs dizaines d\'espèces jusqu\'alors inconnues. Un trésor de biodiversité menacé par la déforestation.',
      author: 'Thomas Moreau',
      date: '7 septembre 2025',
      category: 'Environnement',
      tags: ['biodiversité', 'amazonie', 'découverte'],
      readTime: '8 min'
    },
    {
      id: 21,
      title: 'Pollution plastique : l\'innovation qui pourrait tout changer',
      imageUrl: 'assets/images/plastic-pollution.jpg',
      excerpt: 'Des chercheurs ont mis au point une enzyme capable de décomposer le plastique en quelques heures. Cette découverte pourrait révolutionner la lutte contre la pollution plastique.',
      author: 'Claire Martin',
      date: '4 septembre 2025',
      category: 'Environnement',
      tags: ['pollution', 'plastique', 'innovation'],
      readTime: '5 min'
    },
    {
      id: 22,
      title: 'Agriculture durable : ces fermes qui réinventent notre alimentation',
      imageUrl: 'assets/images/sustainable-farming.jpg',
      excerpt: 'Reportage dans plusieurs exploitations agricoles qui ont adopté des méthodes durables et innovantes. Un modèle d\'agriculture respectueux de l\'environnement et économiquement viable.',
      author: 'Pierre Dubois',
      date: '1 septembre 2025',
      category: 'Environnement',
      tags: ['agriculture', 'durable', 'alimentation'],
      readTime: '7 min'
    },

    // Culture articles
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
      id: 23,
      title: 'Festival de Cannes : palmarès complet et réactions',
      imageUrl: 'assets/images/cannes-festival.jpg',
      excerpt: 'Le 78e Festival de Cannes s\'est achevé hier soir avec la remise de la Palme d\'or. Retour sur le palmarès complet et les moments forts de cette édition.',
      author: 'Émilie Renard',
      date: '7 septembre 2025',
      category: 'Culture',
      tags: ['festival', 'cannes', 'cinéma'],
      readTime: '6 min'
    },
    {
      id: 24,
      title: 'Littérature : entretien avec le lauréat du Prix Goncourt',
      videoId: 'btPJPFnesV4',
      excerpt: 'Rencontre exclusive avec l\'auteur qui vient de remporter le prestigieux Prix Goncourt. Il nous parle de son roman, de son processus d\'écriture et de ses influences littéraires.',
      author: 'Sophie Lambert',
      date: '5 septembre 2025',
      category: 'Culture',
      tags: ['littérature', 'goncourt', 'interview'],
      readTime: '8 min'
    },
    {
      id: 25,
      title: 'Exposition : les chefs-d\'œuvre impressionnistes réunis à Paris',
      imageUrl: 'assets/images/impressionism.jpg',
      excerpt: 'Une exposition exceptionnelle rassemble plus de 150 tableaux impressionnistes venus du monde entier. Une occasion unique d\'admirer ces chefs-d\'œuvre réunis pour la première fois.',
      author: 'Laurent Petit',
      date: '3 septembre 2025',
      category: 'Culture',
      tags: ['exposition', 'art', 'impressionnisme'],
      readTime: '5 min'
    },
    {
      id: 26,
      title: 'Musique : le nouvel album qui révolutionne la pop',
      imageUrl: 'assets/images/music-album.jpg',
      excerpt: 'Cet album surprise, sorti sans aucune promotion préalable, est en train de battre tous les records d\'écoute. Analyse d\'un phénomène musical qui bouscule les codes de l\'industrie.',
      author: 'Julie Moreau',
      date: '1 septembre 2025',
      category: 'Culture',
      tags: ['musique', 'pop', 'album'],
      readTime: '4 min'
    },

    // Santé articles
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
    },
    {
      id: 27,
      title: 'Nutrition : les superaliments qui renforcent l\'immunité',
      imageUrl: 'assets/images/superfoods.jpg',
      excerpt: 'Quels sont ces aliments aux propriétés exceptionnelles qui peuvent aider à renforcer notre système immunitaire ? Notre nutritionniste fait le point sur ces superaliments et leurs bienfaits.',
      author: 'Dr. Marie Blanc',
      date: '4 septembre 2025',
      category: 'Santé',
      tags: ['nutrition', 'immunité', 'alimentation'],
      readTime: '6 min'
    },
    {
      id: 28,
      title: 'Sommeil : les nouvelles recommandations des spécialistes',
      videoId: 'M7lc1UVf-VE',
      excerpt: 'Une étude internationale vient de publier de nouvelles recommandations sur le sommeil. Durée idéale, habitudes à adopter : les conseils des experts pour un sommeil réparateur.',
      author: 'Dr. Pierre Laurent',
      date: '3 septembre 2025',
      category: 'Santé',
      tags: ['sommeil', 'bien-être', 'santé'],
      readTime: '7 min'
    },
    {
      id: 29,
      title: 'Santé mentale : comment gérer l\'anxiété au quotidien',
      imageUrl: 'assets/images/mental-health.jpg',
      excerpt: 'L\'anxiété touche de plus en plus de personnes dans notre société moderne. Quelles sont les techniques efficaces pour la gérer au quotidien ? Les conseils de nos psychologues.',
      author: 'Dr. Sophie Durand',
      date: '2 septembre 2025',
      category: 'Santé',
      tags: ['anxiété', 'santé mentale', 'bien-être'],
      readTime: '8 min'
    },
    {
      id: 30,
      title: 'Sport : les exercices idéaux après 50 ans',
      imageUrl: 'assets/images/senior-fitness.jpg',
      excerpt: 'Quelles activités physiques privilégier après 50 ans ? Notre coach sportif propose un programme adapté pour rester en forme tout en préservant ses articulations et sa santé cardiovasculaire.',
      author: 'Marc Leblanc',
      date: '1 septembre 2025',
      category: 'Santé',
      tags: ['sport', 'senior', 'forme'],
      readTime: '5 min'
    }
  ];

  getArticles() {
    return this.data;
  }

  getArticleById(id: number|string) {
    return this.data.find(a => +a.id === +id) ?? null;
  }
}
