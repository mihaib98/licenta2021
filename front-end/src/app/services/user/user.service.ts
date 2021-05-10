import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Service} from "../service.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {SecurityStorage} from "./security.storage";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private rootURL: string = 'api/security';
  private loginPath: string = '/authenticate';

  public isLogged: boolean;
  public userModel;

  constructor(private router: Router, private service: Service, private securityStorage: SecurityStorage) {
  }

  login(username: string, password: string): Observable<any> {
    return this.service.post(this.rootURL + this.loginPath, {
      username: username,
      password: password
    }).pipe(map((response: any) => {
      this.securityStorage.store(response.token);
      this.getUser();
      return response;
    }));
  }

  getUser(): Observable<any> {
    return this.service.get(this.rootURL + this.loginPath).pipe(map((response: any) => {
      this.userModel = 'teacher';
      this.isLogged = true;
      return response;
    }));
  }

  logout() {
    this.securityStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
