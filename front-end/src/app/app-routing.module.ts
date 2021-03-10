import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ApplicationRoutes} from './services/items/applicationRoutes';
import {LoginComponent} from './commons/components/login/login.component';
import {AuthenticationGuard} from './services/guards/authentication.guard';
import {NotAuthenticationGuard} from './services/guards/not-authentication.guard';

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
    loadChildren: () => import('./commons/commons.module').then(m => m.CommonsModule)
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
