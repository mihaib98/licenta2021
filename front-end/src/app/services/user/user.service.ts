import {Injectable} from '@angular/core';
import users from "../user/users.json";
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public isLogged: boolean;

  constructor(private router: Router) {
  }

  login(username: string, password: string) {
    for(let user of users){
      if(user.username === username && user.password === password){
        this.router.navigateByUrl('/');
        this.isLogged = true;
      }
    }
    if(!this.isLogged){
      this.router.navigateByUrl('/login');
    }
  }
}
