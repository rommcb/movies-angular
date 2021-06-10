import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  moviesList : Movie[] = []
  private url : string = environment.urlApi1

  constructor(
    private _client : HttpClient, 
    private _toastr : NbToastrService
  ) { }

  getAll() : Observable<Movie[]>{
    return this._client.get<Movie[]>(this.url+'Movie')
  }

  
}
