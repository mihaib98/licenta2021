import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ApplicationRoutes} from './services/applicationRoutes';
import {LoginComponent} from './commons/components/login/login.component';

const routes: Routes = [
  {
    path: ApplicationRoutes.LOGIN_PATH,
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'commons'
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
