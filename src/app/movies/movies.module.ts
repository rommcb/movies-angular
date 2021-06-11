import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { ListComponent } from './components/list/list.component';
import { NbListModule } from '@nebular/theme';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule, 
    NbListModule
  ]
})
export class MoviesModule { }
