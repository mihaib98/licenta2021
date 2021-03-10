import {Injectable} from '@angular/core';
import users from "../user/users.json";
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public isLogged: boolean;
  public userModel;

  constructor(private router: Router) {
  }

  login(username: string, password: string) {
    for(let user of users){
      if(user.username === username && user.password === password){
        this.isLogged = true;
        this.userModel = user;
        localStorage.setItem('isLogged', String(true));
        localStorage.setItem('userType', user.type);
        this.router.navigateByUrl('/');
      }
    }
    if(!this.isLogged){
      this.router.navigateByUrl('/login');
    }
  }

  logout(){
    localStorage.removeItem('isLogged');
    localStorage.removeItem('userType');
    this.isLogged = false;
    this.router.navigateByUrl('/login');
  }
}
