import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApplicationRoutes} from './services/items/applicationRoutes';
import {LoginComponent} from './commons/components/login/login.component';
import {NotAuthenticationGuard} from './services/guards/not-authentication.guard';
import {AuthenticationGuard} from "./services/guards/authentication.guard";

const routes: Routes = [
  {
    path: ApplicationRoutes.LOGIN_PATH,
    pathMatch: 'full',
    component: LoginComponent,
    canActivate: [NotAuthenticationGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: ApplicationRoutes.COMMONS_MODULE_PATH,
    loadChildren: () => import('./commons/commons.module').then(m => m.CommonsModule),
    canActivate: [AuthenticationGuard]
  },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
