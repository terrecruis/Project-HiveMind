import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MarkdownService } from '../../_services/markdown/markdown.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  ideas: any[] = [];
  convertedIdeas: any[] = [];

  constructor(private router: Router, private markdownService: MarkdownService) { }

  async ngOnInit(): Promise<void> {
    // Simulazione di recupero dei dati
    this.ideas = [
      { id: '1', title: 'Titolo dell\'Idea 1', description: '**Descrizione dell\'idea 1**\n\n*Testo in corsivo*\n\n[Link esempio](https://example.com)' },
      { id: '2', title: 'Titolo dell\'Idea 2', description: 'Descrizione dell\'idea 2' }
    ];

    // Convertire le descrizioni in HTML
    this.convertedIdeas = await Promise.all(this.ideas.map(async (idea) => {
      return {
        ...idea,
        description: await this.markdownService.convertToHtml(idea.description)
      };
    }));
  }

  goToComments(ideaId: string): void {
    this.router.navigate(['/comment-section', ideaId]);
  }
}
