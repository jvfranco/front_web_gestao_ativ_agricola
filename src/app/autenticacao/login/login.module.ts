import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LogarComponent, LoginComponent } from './components';

@NgModule({
  declarations: [
    LoginComponent,
    LogarComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LoginModule { }
