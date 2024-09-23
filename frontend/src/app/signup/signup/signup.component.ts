import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RestBackendService } from '../../_services/rest-backend/rest-backend.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']  
})
export class SignupComponent {
  toastr = inject(ToastrService);  
  router = inject(Router);  
  restService = inject(RestBackendService);
  
  // Flag che indica se il form è stato inviato
  submitted = false;

  // Definizione del form con Reactive Forms
  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),  // Campo per l'utente con validazione
    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(4),  
      Validators.maxLength(16)  
    ])
  });

  // Metodo che gestisce la registrazione
  doSignUp() {
    this.submitted = true;  // Imposta il form come inviato

    // Se il form non è valido, mostra un errore
    if (this.signupForm.invalid) {
      this.toastr.error("I dati forniti non sono validi!", "Errore nei dati!");
      return;
    }

    // Chiamata al servizio REST per la registrazione
    this.restService.signup({
      usr: this.signupForm.value.email as string,  
      pwd: this.signupForm.value.password as string
    }).subscribe({
      error: () => {
        this.toastr.error("Il nome utente scelto è già stato utilizzato", "Errore nella creazione dell'account");
      },
      complete: () => {
        this.toastr.success(`Registrazione completata!`, `Complimenti ${this.signupForm.value.email}!`);
        this.router.navigateByUrl("/login");  // Reindirizza alla pagina di login
      }
    });
  }
}
