import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/movie.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  
  peopleList : Person[] = []
  private url : string = environment.urlApi1

  constructor(
    private _client : HttpClient
  ) { }

  getAll() : Observable<Person[]>{
    return this._client.get<Person[]>(this.url+'Person')
  }
 
}
