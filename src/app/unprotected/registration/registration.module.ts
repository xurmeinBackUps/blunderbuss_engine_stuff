import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  FormsModule, 
  ReactiveFormsModule 
} from '@angular/forms';

import { 
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatTabsModule
} from '@angular/material';

import { SplashComponent } from './splash/splash.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormSelectorComponent } from './form-selector/form-selector.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatTabsModule
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
