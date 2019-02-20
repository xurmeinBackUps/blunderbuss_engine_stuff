import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './app-core/page404/page404.component';
// import { SplashComponent } from './unprotected/registration/splash/splash.component';

const appRoutes: Routes = [
  // { path: 'home' || 'splash', component: SplashComponent },
  { path: '**', component: Page404Component},
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
