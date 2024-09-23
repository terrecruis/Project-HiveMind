import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../_services/auth/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { effect } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']  
})
export class NavbarComponent {
  router = inject(Router); 
  auth = inject(AuthService);
  isAuthenticated: boolean = false;

  constructor() {
    // Usa effect() qui
    effect(() => {
      this.isAuthenticated = this.auth.isAuthenticated$();
    });
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  doLogout() {
    this.auth.logout();
    this.router.navigate([""]); // Naviga alla home o dove preferisci
  }
}
