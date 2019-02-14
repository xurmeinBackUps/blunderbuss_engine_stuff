import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatCardModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

import { SplashComponent } from './splash/splash.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormSelectorComponent } from './form-selector/form-selector.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    SplashComponent, 
    FormContainerComponent, 
    FormSelectorComponent, 
    SignUpComponent, 
    LoginComponent
  ],
  exports: [
    SplashComponent, 
    FormContainerComponent, 
    FormSelectorComponent, 
    SignUpComponent, 
    LoginComponent
  ]
})
export class RegistrationModule { }
