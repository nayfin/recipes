import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { DesignModule } from './../modules/design.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations:[
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    DesignModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],

})
export class AuthModule {

}
