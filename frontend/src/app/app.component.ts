import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { FooterComponent } from "./footer/footer/footer.component";
import { NavbarComponent } from "./navbar/navbar/navbar.component";
import { WelcomePageComponent } from './welcome-page/welcome-page/welcome-page.component';
import { IdeaCreationFormComponent } from './homepage/idea-creation-form/idea-creation-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, FooterComponent, NavbarComponent, WelcomePageComponent, IdeaCreationFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  title = 'frontend';

  isUserAuthenticated(): boolean {
    return true;  // Mock authentication check
  }
}
