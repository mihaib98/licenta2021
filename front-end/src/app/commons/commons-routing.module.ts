import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AuthenticationGuard} from '../services/guards/authentication.guard';
import {EvaluationsResultsComponent} from './components/evaluations-results/evaluations-results.component';
import {ApplicationRoutes} from '../services/items/applicationRoutes';
import {StudentsStatisticsComponent} from './components/students-statistics/students-statistics.component';
import {TeachersStatisticsComponent} from './components/teachers-statistics/teachers-statistics.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: HomeComponent,
  canActivate: [AuthenticationGuard]
}, {
  path: ApplicationRoutes.EVALUATIONS_RESULT,
  pathMatch: 'full',
  component: EvaluationsResultsComponent,
}, {
  path: ApplicationRoutes.STUDENTS_STATISTICS,
  pathMatch: 'full',
  component: StudentsStatisticsComponent,
}, {
  path: ApplicationRoutes.TEACHERS_STATISTICS,
  pathMatch: 'full',
  component: TeachersStatisticsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonsRoutingModule {
}
