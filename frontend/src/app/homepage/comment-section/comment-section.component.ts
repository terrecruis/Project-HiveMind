import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MarkdownService } from '../../_services/markdown/markdown.service';

@Component({
  selector: 'app-comment-section',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {

  idea: any = {
    id: 0,
    title: '',
    description: '',
    comments: []
  };
  convertedDescription = '';
  newComment = '';

  constructor(
    private route: ActivatedRoute,
    private markdownService: MarkdownService // Iniettare il servizio Markdown
  ) { }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    
    // Simulazione di recupero dei dati basati sull'ID
    this.idea = {
      id: id,
      title: `Titolo dell'Idea ${id}`,
      description: `**Descrizione dell'idea ${id}**\n\n*Testo in corsivo*\n\n[Link esempio](https://example.com)`,
      comments: ['Commento esistente']
    };

    // Convertire la descrizione in HTML
    this.convertedDescription = await this.markdownService.convertToHtml(this.idea.description);
  }

  addComment(): void {
    /*
    if (this.newComment.trim()) {
      this.idea.comments.push(this.newComment.trim());
      this.newComment = '';
    }
    */
  }
}
