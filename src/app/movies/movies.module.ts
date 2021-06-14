import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { ListComponent } from './components/list/list.component';
import { NbCardModule, NbDatepickerModule, NbDialogConfig, NbDialogModule, NbLayoutModule, NbListModule, NbSelectModule, NbToastrModule } from '@nebular/theme';
import { DetailsComponent } from './components/details/details.component';
import { CreateComponent } from './components/create/create.component';
import { SharedModule } from '../shared/shared.module';
import { TokenInterceptor } from './token.interceptor';
import { CreatePersonComponent } from './components/create-person/create-person.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    CreateComponent,
    CreatePersonComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    NbToastrModule,
    NbDatepickerModule, 
    SharedModule
  ]
})
export class MoviesModule { }
