import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  authenticate() {
    this.userService.login(this.username, this.password);
  }

}
