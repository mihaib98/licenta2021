import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private userService: UserService, public router: Router) {
  }

  canActivate(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (this.userService.isLogged === true) {
        console.log('okee');
        resolve(true);
      } else {
        console.log('nope');
        this.router.navigateByUrl('/login').then();
        resolve(false);
      }
    });
  }

}
