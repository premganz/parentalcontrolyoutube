import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  status: 'active' | 'completed' | 'upcoming';
  duration: string;
  collaborators: string[];
  tags: string[];
  image: string;
  link?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Digital Archive of Cultural Memory',
      description: 'A comprehensive digital platform preserving and analyzing cultural artifacts from marginalized communities, utilizing AI-powered metadata generation and interactive visualization tools.',
      status: 'active',
      duration: '2023-2025',
      collaborators: ['University of Toronto', 'Digital Heritage Lab', 'Community Partners'],
      tags: ['Digital Archives', 'AI', 'Cultural Heritage', 'Community Engagement'],
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      link: '#'
    },
    {
      title: 'Postcolonial Digital Humanities Network',
      description: 'An international research network examining how digital humanities methodologies can be decolonized and made more inclusive of non-Western epistemologies.',
      status: 'active',
      duration: '2022-2024',
      collaborators: ['Global South Universities', 'Indigenous Scholars Collective'],
      tags: ['Postcolonial Studies', 'Digital Humanities', 'Decolonization', 'Global Network'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      link: '#'
    },
    {
      title: 'AI Ethics in Cultural Analysis',
      description: 'Investigating the ethical implications of using artificial intelligence for cultural analysis, with focus on bias, representation, and algorithmic transparency.',
      status: 'completed',
      duration: '2021-2023',
      collaborators: ['Ethics Institute', 'Tech Industry Partners'],
      tags: ['AI Ethics', 'Cultural Analysis', 'Algorithmic Bias', 'Technology Studies'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      link: '#'
    },
    {
      title: 'Future of Academic Publishing',
      description: 'Exploring alternative models for academic publishing in the digital age, including open access platforms, peer review innovations, and multimedia scholarship.',
      status: 'upcoming',
      duration: '2024-2026',
      collaborators: ['Academic Publishers', 'Open Access Initiative'],
      tags: ['Academic Publishing', 'Open Access', 'Digital Scholarship', 'Innovation'],
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      link: '#'
    }
  ];

  getStatusClass(status: string): string {
    switch (status) {
      case 'active': return 'status-active';
      case 'completed': return 'status-completed';
      case 'upcoming': return 'status-upcoming';
      default: return '';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'active': return 'Active';
      case 'completed': return 'Completed';
      case 'upcoming': return 'Upcoming';
      default: return status;
    }
  }
}