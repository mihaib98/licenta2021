import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user/user.service';
import {ApplicationRoutes} from "../../../services/items/applicationRoutes";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {}

  authenticate() {
    this.userService.login(this.username, this.password).subscribe((response) => {
      this.router.navigateByUrl(ApplicationRoutes.COMMONS_MODULE_PATH).then();
    });
  }

}
