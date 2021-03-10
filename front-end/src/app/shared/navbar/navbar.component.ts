import { Component, OnInit } from '@angular/core';
import {ApplicationRoutes} from '../../services/items/applicationRoutes';
import {Router} from '@angular/router';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router, private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.userService.userModel);
  }

  gotoStudentsStatistics(){
    this.router.navigateByUrl(ApplicationRoutes.STUDENTS_STATISTICS);
  }

  gotoEvaluationsResult(){
    this.router.navigateByUrl(ApplicationRoutes.EVALUATIONS_RESULT);
  }

  gotoTeachersResult(){
    this.router.navigateByUrl(ApplicationRoutes.TEACHERS_STATISTICS);
  }

  logout(){
    this.userService.logout();
  }
}
