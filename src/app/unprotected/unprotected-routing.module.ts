import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './registration/splash/splash.component';

const exposedRoutes: Routes = [
  { path: 'splash', component: SplashComponent }
];

@NgModule({
  imports: [RouterModule.forChild(exposedRoutes)],
  exports: [RouterModule]
})
export class UnprotectedRoutingModule { }
