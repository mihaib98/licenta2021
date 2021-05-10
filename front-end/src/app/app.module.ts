import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {UserService} from './services/user/user.service';
import {HttpClientModule} from "@angular/common/http";
import {SecurityStorage} from "./services/user/security.storage";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, SecurityStorage,  {
    provide: APP_INITIALIZER,
    useFactory: (userService: UserService) => () => userService.getUser(),
    deps: [UserService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
