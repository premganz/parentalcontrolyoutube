import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  expertise: string[];
  email: string;
}

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Director & Principal Investigator',
      bio: 'Dr. Chen specializes in digital humanities and computational cultural analysis. Her work focuses on the intersection of technology and humanistic inquiry.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      expertise: ['Digital Humanities', 'Cultural Analysis', 'Data Visualization'],
      email: 'sarah.chen@manifoldstudies.com'
    },
    {
      name: 'Prof. Michael Rodriguez',
      title: 'Senior Research Fellow',
      bio: 'Prof. Rodriguez brings expertise in critical theory and media studies, with particular focus on postmodern cultural phenomena.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      expertise: ['Critical Theory', 'Media Studies', 'Cultural Criticism'],
      email: 'michael.rodriguez@manifoldstudies.com'
    },
    {
      name: 'Dr. Amara Okafor',
      title: 'Postcolonial Studies Researcher',
      bio: 'Dr. Okafor\'s research examines postcolonial digital archives and the decolonization of digital humanities methodologies.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      expertise: ['Postcolonial Studies', 'Digital Archives', 'Decolonial Theory'],
      email: 'amara.okafor@manifoldstudies.com'
    }
  ];
}