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
      Validators.minLength(4),  // Lunghezza minima della password
      Validators.maxLength(16)  // Lunghezza massima della password
    ])
  });

  // Metodo che gestisce la registrazione
  doSignUp() {
    this.submitted = true;  // Imposta il form come inviato

    // Se il form non è valido, mostra un errore
    if (this.signupForm.invalid) {
      this.toastr.error("I dati forniti non sono validi!", "Errore nei dati!");
      return;  // Non continua se il form è invalido
    }

    // Chiamata al servizio REST per la registrazione
    this.restService.signup({
      usr: this.signupForm.value.email as string,  // Prende il valore del nome utente dal form
      pwd: this.signupForm.value.password as string   // Prende il valore della password dal form
    }).subscribe({
      error: () => {
        // Mostra un errore se il nome utente è già utilizzato
        this.toastr.error("Il nome utente scelto è già stato utilizzato", "Errore nella creazione dell'account");
      },
      complete: () => {
        // Mostra un messaggio di successo e reindirizza alla pagina di login
        this.toastr.success(`Registrazione completata!`, `Complimenti ${this.signupForm.value.email}!`);
        this.router.navigateByUrl("/login");  // Reindirizza alla pagina di login
      }
    });
  }
}
