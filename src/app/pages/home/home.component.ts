import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { ResearchAreasComponent } from '../../components/research-areas/research-areas.component';
import { PublicationsComponent } from '../../components/publications/publications.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    ResearchAreasComponent,
    PublicationsComponent,
    ProjectsComponent,
    AboutSectionComponent,
    ContactSectionComponent
  ],
  template: `
    <app-hero-section></app-hero-section>
    <app-research-areas></app-research-areas>
    <app-publications></app-publications>
    <app-projects></app-projects>
    <app-about-section></app-about-section>
    <app-contact-section></app-contact-section>
  `
})
export class HomeComponent {}