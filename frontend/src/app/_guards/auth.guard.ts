import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const toastr = inject(ToastrService);
  const router = inject(Router);

  if (authService.isUserAuthenticated()) {
    return true;
  } else {
    toastr.warning("Please, login to access this feature", "Unauthorized!", {
      timeOut: 4000, 
      progressBar: true, 
    });
    return router.parseUrl("/login"); 
  }
};
