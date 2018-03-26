import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    
    let is_logged_in = this.authService.isLoggedIn()

    if(!is_logged_in)
    {
      console.log('sending to login page');
      this.router.navigate(['/login']);
    }
      

    return is_logged_in;

  }
  

}
