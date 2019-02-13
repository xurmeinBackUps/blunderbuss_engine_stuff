import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash/splash.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormSelectorComponent } from './form-selector/form-selector.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [SplashComponent, FormContainerComponent, FormSelectorComponent, SignUpComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class RegistrationModule { }
