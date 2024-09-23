import { Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page/welcome-page.component';
import { ProfileComponent } from './homepage/profile/profile/profile.component';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup/signup.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { IdeaCreationFormComponent } from './homepage/idea-creation-form/idea-creation-form.component';
import { CommentSectionComponent } from './homepage/comment-section/comment-section.component';

export const routes: Routes = [
  {
    path: "signup",
    component: SignupComponent,
    title: "Sign Up",
  },
  {
    path: "homepage",
    component: HomepageComponent,
    title: "Homepage",
    // canActivate: [authGuard]  // Inserisci un guard se necess
  },
  {
    path: "comment-section/:id",
    component: CommentSectionComponent,
    title: "Comment Section",
    // canActivate: [authGuard]  // Inserisci un guard se necess
  },
  {
    path: "idea-creation-form",
    component: IdeaCreationFormComponent,
    title: "Idea Creation Form",
    // canActivate: [authGuard]  // Inserisci un guard se necessario
  },
  {
    path: "",  // Path per la welcome page
    component: WelcomePageComponent,
    title: "HiveMind",
  },
  {
    path: "profile",
    component: ProfileComponent,
    title: "profile",
    // canActivate: [authGuard]  // Inserisci un guard se necessario
  },
  {
    path: "login",
    component: LoginComponent,
    title: "login",
  },
  {
    path: "**",  // Wildcard route per gestire percorsi non validi
    redirectTo: "",  // Reindirizza alla homepage in caso di percorso non valido
    pathMatch: "full"
  }
];
