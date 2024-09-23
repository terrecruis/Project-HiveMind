import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../_services/auth/auth.service';
import { RestBackendService } from '../../_services/rest-backend/rest-backend.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  toastr = inject(ToastrService);
  router = inject(Router);
  restService = inject(RestBackendService);
  authService = inject(AuthService);
  
  // Flag che indica se il form è stato inviato
  submitted = false;

  // Definizione del form con Reactive Forms
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(4), 
      Validators.maxLength(16)
    ])
  });

  // Metodo per gestire il login
  doLogin() {
    this.submitted = true;

    // Se il form non è valido, mostra un errore
    if (this.loginForm.invalid) {
      this.toastr.error("I dati forniti non sono validi!", "Oops! Dati non validi!");
      return;
    }

    // Chiamata al servizio REST per il login
    this.restService.login({
      usr: this.loginForm.value.email as string,
      pwd: this.loginForm.value.password as string,
    }).subscribe({
      next: (token) => {
        this.authService.updateToken(token); // Aggiorna il token di autenticazione
      },
      error: (err) => {
        this.toastr.error("Per favore, inserisci un'email e una password validi", "Oops! Credenziali non valide");
      },
      complete: () => {
        this.toastr.success(`Puoi ora condividere le tue idee`, `Benvenuto ${this.loginForm.value.email}!`);
        this.router.navigateByUrl("/homepage");
      }
    });
  }
}
