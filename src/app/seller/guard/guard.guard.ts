import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';


@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate{
  constructor(private authService:AuthService){}

  canActivate():any{
    return localStorage.getItem("isseller");
    
  }
}


// export const guardGuard: CanActivateFn = (route, state) => {
//   return true;
// };
