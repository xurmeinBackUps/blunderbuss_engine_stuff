import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './registration/splash/splash.component';
import { Page404Component } from './page404/page404.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard/user-dashboard.component';
// import { SignUpComponent } from './registration/sign-up/sign-up.component';
// import { LoginComponent } from './registration/login/login.component';

const appRoutes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'dashboard', component: UserDashboardComponent },
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
