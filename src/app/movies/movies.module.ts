import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { ListComponent } from './components/list/list.component';
import { NbCardModule, NbListModule, NbSelectModule } from '@nebular/theme';
import { DetailsComponent } from './components/details/details.component';
import { CreateComponent } from './components/create/create.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule, 
    NbListModule, 
    NbCardModule, 
    NbSelectModule, 
    SharedModule
  ]
})
export class MoviesModule { }
