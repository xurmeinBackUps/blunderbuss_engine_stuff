import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './registration/splash/splash.component';
import { SignUpComponent } from './registration/sign-up/sign-up.component';
import { LoginComponent } from './registration/login/login.component';

const appRoutes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
