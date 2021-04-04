import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router, public userService: UserService) { }

  ngOnInit(): void {
  }

  check(){
    console.log('!!!');
  }

  logout(){
    this.userService.logout();
  }
}
