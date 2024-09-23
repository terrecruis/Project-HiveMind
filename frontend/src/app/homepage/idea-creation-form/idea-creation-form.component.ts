import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idea-creation-form',
  standalone: true,
  imports: [],
  templateUrl: './idea-creation-form.component.html',
  styleUrl: './idea-creation-form.component.scss'
})
export class IdeaCreationFormComponent {
constructor(private router: Router) {}

  onCancel(): void {
    // Naviga verso la homepage
    this.router.navigate(['/homepage']);
  }
}
