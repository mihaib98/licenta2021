import {Injectable} from '@angular/core';
import {UserService} from "./user/user.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {SecurityStorage} from "./user/security.storage";

@Injectable({
  providedIn: 'root'
})
export class Service {

  userService: UserService;

  constructor(private http: HttpClient, private securityStorage: SecurityStorage) {
  }

  setUserService(userService: UserService) {
    this.userService = userService;
  }


  private headers(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: 'Bearer ' + this.securityStorage.getStored(),
      'lang': 'ro'
    });
  }

  processURL(url: string): string {
    url = url.replace('api', environment.API_ENDPOINT);
    console.log(url);
    return url;
  }


  get(url: string, pathParams?: Array<string>): Observable<Object> {
    url = this.processURL(url);
    const headers: HttpHeaders = this.headers();
    if (pathParams) {
      pathParams.forEach((pathParam: string) => {
        url += '/' + pathParam;
      });
    }
    return this.http.get(url, {
      headers: headers,
      withCredentials: false
    });
  }

  post(url: string, body?: any) {
    url = this.processURL(url);
    const headers = this.headers();
    return this.http.post(url, body, {
      headers: headers,
      withCredentials: false
    });
  }

  put(url: string, body?: any) {
    url = this.processURL(url);
    const headers = this.headers();
    return this.http.put(url, body, {
      headers: headers,
      withCredentials: false
    });
  }

  delete(url: string) {
    url = this.processURL(url);
    const headers = this.headers();
    return this.http.delete(url, {
      headers: headers,
      withCredentials: false
    });
  }


}
