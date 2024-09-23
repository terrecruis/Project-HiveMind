import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MarkdownService } from '../../_services/markdown/markdown.service';
import { MarkdownModule } from 'ngx-markdown'; 
import { RestBackendService } from '../../_services/rest-backend/rest-backend.service';
import { IdeaItem, CommentItem } from '../../_services/rest-backend/IdeaItem';
@Component({
  selector: 'app-comment-section',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive, MarkdownModule ], // Aggiungi questo],
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {

  idea: IdeaItem = {
    id: 0,
    title: '',
    description: '',
    Comments: []
  };

  convertedDescription = '';
  newComment = '';

  constructor(
    private route: ActivatedRoute,
    private markdownService: MarkdownService,
    private restBackendService: RestBackendService
  ) { }

  goBack(): void {
    window.history.back();
  }
  
  async ngOnInit(): Promise<void> {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Ottieni l'ID dell'idea dall'URL

    // Carica i dettagli dell'idea (e i commenti)
    this.restBackendService.getIdeaDetails(id).subscribe({
      next: async (idea: IdeaItem) => {
        this.idea = idea;
        this.convertedDescription = await this.markdownService.convertToHtml(this.idea.description);
      },
      error: (err) => {
        console.error('Errore durante il caricamento dei dettagli dell\'idea', err);
      }
    });
  }

  submitComment(): void {
    if (this.newComment.trim()) {
      // Invio del nuovo commento
      this.restBackendService.postComment(this.idea.id!, this.newComment.trim()).subscribe({
        next: (comment: any) => {
          // Cast esplicito della risposta come CommentItem
          const newComment = comment as CommentItem;
  
          this.idea.Comments?.push(newComment); // Aggiungi il commento alla lista
          this.newComment = ''; // Resetta il campo di input
        },
        error: (err) => {
          console.error('Errore durante l\'invio del commento', err);
        }
      });
    }
  }
}
