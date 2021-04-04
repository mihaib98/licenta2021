import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AuthenticationGuard} from '../services/guards/authentication.guard';
import {EvaluationsResultsComponent} from './components/evaluations-results/evaluations-results.component';
import {ApplicationRoutes} from '../services/items/applicationRoutes';
import {StudentsStatisticsComponent} from './components/students-statistics/students-statistics.component';
import {TeachersStatisticsComponent} from './components/teachers-statistics/teachers-statistics.component';
import {AdministrationComponent} from './components/administration/administration.component';
import {DidacticEvaluationComponent} from './components/didactic-evaluation/didactic-evaluation.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: HomeComponent,
  canActivate: [AuthenticationGuard]
}, {
  path: ApplicationRoutes.EVALUATIONS_RESULT,
  pathMatch: 'full',
  component: EvaluationsResultsComponent,
  canActivate: [AuthenticationGuard]
}, {
  path: ApplicationRoutes.STUDENTS_STATISTICS,
  pathMatch: 'full',
  component: StudentsStatisticsComponent,
  canActivate: [AuthenticationGuard]
}, {
  path: ApplicationRoutes.TEACHERS_STATISTICS,
  pathMatch: 'full',
  component: TeachersStatisticsComponent,
  canActivate: [AuthenticationGuard]
}, {
  path: ApplicationRoutes.ADMINISTRATION,
  pathMatch: 'full',
  component: AdministrationComponent,
  canActivate: [AuthenticationGuard]
}, {
  path: ApplicationRoutes.DIDACTIC_EVALUATIONS,
  pathMatch: 'full',
  component: DidacticEvaluationComponent,
  canActivate: [AuthenticationGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonsRoutingModule {
}
