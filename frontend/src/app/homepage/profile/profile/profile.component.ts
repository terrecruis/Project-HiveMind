import { Component, inject, Inject } from '@angular/core';
import { AuthService } from '../../../_services/auth/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  authService = inject(AuthService);

}
