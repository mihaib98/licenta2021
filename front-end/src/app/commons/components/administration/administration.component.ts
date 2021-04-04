import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.userService.isLogged);
    console.log(this.userService.userModel);
  }

}
