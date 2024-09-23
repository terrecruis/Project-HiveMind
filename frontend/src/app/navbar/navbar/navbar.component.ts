import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  providers: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']  
})
export class NavbarComponent {
  router = inject(Router); 
  isAuthenticated: boolean = false;
}