import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from '../user/user.service';
import {SecurityStorage} from "../user/security.storage";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private userService: UserService, public router: Router, private securityStorage : SecurityStorage) {
  }

  canActivate(): boolean {
    if(this.securityStorage.getStored() != null){
      return true;
    }
    return false;
  }

}
