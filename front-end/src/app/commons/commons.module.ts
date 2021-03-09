import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { StudentsStatisticsComponent } from './components/students-statistics/students-statistics.component';
import { EvaluationsResultsComponent } from './components/evaluations-results/evaluations-results.component';
import { TeachersStatisticsComponent } from './components/teachers-statistics/teachers-statistics.component';


@NgModule({
  declarations: [LoginComponent, HomeComponent, StudentsStatisticsComponent, EvaluationsResultsComponent, TeachersStatisticsComponent],
  imports: [
    CommonModule,
    CommonsRoutingModule,
    FormsModule
  ]
})
export class CommonsModule { }
