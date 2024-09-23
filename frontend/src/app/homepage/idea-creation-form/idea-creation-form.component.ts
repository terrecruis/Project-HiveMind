import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestBackendService } from '../../_services/rest-backend/rest-backend.service';
import { IdeaItem } from '../../_services/rest-backend/IdeaItem';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-idea-creation-form',
  standalone: true,
  imports: [],
  templateUrl: './idea-creation-form.component.html',
  styleUrls: ['./idea-creation-form.component.scss']
})
export class IdeaCreationFormComponent {
  constructor(
    private router: Router,
    private restService: RestBackendService,
    private toastr: ToastrService
  ) {}

  onSubmit(event: Event): void {
    event.preventDefault(); // Prevenire il comportamento predefinito del modulo

    const form = event.target as HTMLFormElement;
    const title = (form['ideaTitle'] as HTMLInputElement).value;
    const description = (form['ideaDescription'] as HTMLTextAreaElement).value;

    const newIdea: IdeaItem = { title, description };

    this.restService.postIdea(newIdea).subscribe({
      next: () => {
        this.toastr.success('Idea creata con successo!', 'Successo');
        this.router.navigate(['/homepage']); // Naviga verso la homepage
      },
      error: (err) => {
        this.toastr.error(err.message || 'Errore durante la creazione dell\'idea', 'Errore');
      }
    });
  }

  onCancel(): void {
    // Naviga verso la homepage
    this.router.navigate(['/homepage']);
  }
}
