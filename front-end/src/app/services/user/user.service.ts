import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Service} from "../service.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private rootURL: string = 'api/security';
  private loginPath: string = '/authenticate';

  public isLogged: boolean;
  public userModel;

  constructor(private router: Router, private service: Service) {
  }

  login(username: string, password: string): Observable<any> {
    return this.service.post(this.rootURL + this.loginPath, {
      username: username,
      password: password
    }).pipe(map((response: any) => {
      return response;
    }));
  }

  getTest(): Observable<any> {
    return this.service.get(this.rootURL).pipe(map((response: any) => {
      return response;
    }));
  }

  logout() {
    localStorage.removeItem('isLogged');
    localStorage.removeItem('userType');
    this.isLogged = false;
    this.router.navigateByUrl('/login');
  }
}
