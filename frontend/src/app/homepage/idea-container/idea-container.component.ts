import { Component, Input, inject } from '@angular/core';
import { RestBackendService } from '../../_services/rest-backend/rest-backend.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { IdeaItem } from '../../_services/rest-backend/IdeaItem';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-idea-container',
  templateUrl: './idea-container.component.html',
  styleUrls: ['./idea-container.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIcon, NgClass, MarkdownModule, RouterLink],
})
export class IdeaContainerComponent {
  @Input() idea: IdeaItem = { id: 0, title: "", description: "", PositiveVotes: 0, NegativeVotes: 0 };
  @Input() inDetail: boolean = false;

  private router = inject(Router);
  private toastr = inject(ToastrService);
  private restService = inject(RestBackendService);

  like(): void {
    if (this.idea.id !== undefined) {
      this.restService.voteIdea(this.idea.id, true).subscribe({
        next: (data) => {
          this.idea.PositiveVotes = (this.idea.PositiveVotes ?? 0) + 1;
          console.log(data);
        },
        error: (err) => {
          this.toastr.error("Non puoi votare la tua idea o votare due volte la stessa idea!", "Errore nel voto!");
          console.error(err);
        }
      });
    }
  }

  dislike(): void {
    if (this.idea.id !== undefined) {
      this.restService.voteIdea(this.idea.id, false).subscribe({
        next: (data) => {
          this.idea.NegativeVotes = (this.idea.NegativeVotes ?? 0) + 1;
          console.log(data);
        },
        error: (err) => {
          this.toastr.error("Non puoi votare la tua idea o votare due volte la stessa idea!", "Errore nel voto!");
          console.error(err);
        }
      });
    }
  }

  viewIdea(): void {
    if (this.idea.id !== undefined && !this.inDetail) {
      this.router.navigateByUrl(`/comment-section/${this.idea.id}`);
    }
  }
}
