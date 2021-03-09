import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApplicationRoutes} from '../../../services/items/applicationRoutes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoStudentsStatistics(){
    this.router.navigateByUrl(ApplicationRoutes.STUDENTS_STATISTICS_FULL_PATH);
  }

  gotoEvaluationsResult(){
    this.router.navigateByUrl(ApplicationRoutes.EVALUATIONS_RESULT_FULL_PATH);
  }

  gotoTeachersResult(){
    this.router.navigateByUrl(ApplicationRoutes.TEACHERS_STATISTICS_FULL_PATH);
  }
}
