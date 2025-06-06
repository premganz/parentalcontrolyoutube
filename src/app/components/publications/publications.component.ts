import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Publication {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  type: 'article' | 'book' | 'chapter' | 'conference';
  abstract: string;
  doi?: string;
  featured: boolean;
}

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent {
  publications: Publication[] = [
    {
      title: 'Digital Methodologies in Cultural Analysis: A Critical Framework',
      authors: ['Dr. Sarah Chen', 'Prof. Michael Rodriguez'],
      journal: 'Digital Humanities Quarterly',
      year: 2024,
      type: 'article',
      abstract: 'This paper presents a comprehensive framework for applying digital methodologies to cultural analysis, examining the theoretical and practical implications of computational approaches in humanities research.',
      doi: '10.1000/dhq.2024.001',
      featured: true
    },
    {
      title: 'Postcolonial Digital Archives: Power, Memory, and Representation',
      authors: ['Dr. Amara Okafor', 'Dr. Sarah Chen'],
      journal: 'Critical Studies in Media Communication',
      year: 2023,
      type: 'article',
      abstract: 'An examination of how digital archives perpetuate or challenge colonial power structures, with case studies from African digital heritage projects.',
      doi: '10.1080/csmc.2023.456',
      featured: true
    },
    {
      title: 'The Manifold Reader: Essays on Interdisciplinary Research',
      authors: ['Various Contributors'],
      journal: 'University Academic Press',
      year: 2023,
      type: 'book',
      abstract: 'A collection of essays exploring the boundaries and intersections of interdisciplinary research in the digital age.',
      featured: false
    },
    {
      title: 'AI and the Future of Humanistic Inquiry',
      authors: ['Prof. Michael Rodriguez'],
      journal: 'Proceedings of Digital Humanities 2023',
      year: 2023,
      type: 'conference',
      abstract: 'Exploring the potential and limitations of artificial intelligence in humanities research and pedagogy.',
      featured: false
    },
    {
      title: 'Gender and Technology in Digital Spaces',
      authors: ['Dr. Lisa Park', 'Dr. Amara Okafor'],
      journal: 'Feminist Media Studies',
      year: 2022,
      type: 'article',
      abstract: 'An analysis of how gender dynamics play out in digital spaces and their implications for feminist theory and practice.',
      doi: '10.1080/fms.2022.789',
      featured: false
    }
  ];

  featuredPublications = this.publications.filter(pub => pub.featured);
  recentPublications = this.publications.slice(0, 4);

  getTypeIcon(type: string): string {
    switch (type) {
      case 'article': return '📄';
      case 'book': return '📚';
      case 'chapter': return '📖';
      case 'conference': return '🎤';
      default: return '📄';
    }
  }

  getTypeLabel(type: string): string {
    switch (type) {
      case 'article': return 'Journal Article';
      case 'book': return 'Book';
      case 'chapter': return 'Book Chapter';
      case 'conference': return 'Conference Paper';
      default: return 'Publication';
    }
  }
}