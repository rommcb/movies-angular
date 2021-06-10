import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagerRoutingModule } from './user-manager-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { NbDatepickerModule } from '@nebular/theme';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserManagerRoutingModule, 
    SharedModule,
    NbDatepickerModule
  ]
})
export class UserManagerModule { }

