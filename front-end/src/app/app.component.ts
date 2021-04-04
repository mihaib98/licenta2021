import { Component } from '@angular/core';
import {UserService} from './services/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';

  constructor(public userService: UserService, public router: Router){
  }
}
