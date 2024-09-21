import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { InstagramService } from '../service/auth/instagram.service';
import { inject, Inject } from '@angular/core';

export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const instagramService = inject(InstagramService);
  const router = inject(Router);
  if(instagramService.isAuthenticated()){
    return true;
  }
  router.navigate(['/login'],{queryParams:{ returnUrl: state.url }})
  return false;
};
