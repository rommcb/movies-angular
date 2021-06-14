import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonComponent } from './components/create-person/create-person.component';
import { CreateComponent } from './components/create/create.component';
import { DetailsComponent } from './components/details/details.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {path : '', children : [
    {path : 'list', component : ListComponent},
    {path : 'details/:id', component : DetailsComponent}, 
    {path : 'create', component : CreateComponent},
    {path : 'create-person', component : CreatePersonComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
