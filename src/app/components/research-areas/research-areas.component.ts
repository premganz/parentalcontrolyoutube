import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ResearchArea {
  title: string;
  description: string;
  icon: string;
  topics: string[];
}

@Component({
  selector: 'app-research-areas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './research-areas.component.html',
  styleUrls: ['./research-areas.component.css']
})
export class ResearchAreasComponent {
  researchAreas: ResearchArea[] = [
    {
      title: 'Digital Humanities',
      description: 'Exploring the intersection of technology and humanistic inquiry through computational methods and digital tools.',
      icon: '💻',
      topics: ['Text Mining', 'Digital Archives', 'Data Visualization', 'Computational Analysis']
    },
    {
      title: 'Cultural Studies',
      description: 'Examining cultural practices, representations, and power structures in contemporary society.',
      icon: '🎭',
      topics: ['Media Culture', 'Identity Politics', 'Popular Culture', 'Cultural Theory']
    },
    {
      title: 'Critical Theory',
      description: 'Applying critical theoretical frameworks to understand social, political, and cultural phenomena.',
      icon: '🧠',
      topics: ['Poststructuralism', 'Feminist Theory', 'Postcolonial Studies', 'Critical Discourse Analysis']
    },
    {
      title: 'Media Studies',
      description: 'Analyzing media forms, technologies, and their impact on society and culture.',
      icon: '📺',
      topics: ['New Media', 'Film Studies', 'Social Media', 'Media Archaeology']
    }
  ];
}