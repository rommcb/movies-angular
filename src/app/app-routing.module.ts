import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'user', loadChildren : ()=> import('./user-manager/user-manager.module').then(m => m.UserManagerModule)},
  {path : 'movies', loadChildren : ()=> import('./movies/movies.module').then(m => m.MoviesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
