import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class NotAuthenticationGuard implements CanActivate {
  constructor(private userService: UserService, public router: Router) {
  }

  canActivate(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (this.userService.isLogged === true) {
        resolve(false);
      } else if(localStorage.getItem('isLogged')){
        this.userService.isLogged = true;
        resolve(false);
        this.router.navigateByUrl('/');
      } else {
        resolve(true);
      }
    });
  }

}
