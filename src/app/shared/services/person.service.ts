import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { Person, PersonToDal } from 'src/app/models/movie.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  
  peopleList : Person[] = []
  private url : string = environment.urlApi1

  constructor(
    private _client : HttpClient,
    private _toastr: NbToastrService
  ) { }

  getAll() : Observable<Person[]>{
    return this._client.get<Person[]>(this.url+'Person')
  }

  create(person : PersonToDal) : void{
    console.log(person)

    this._client.post<number>(this.url + "person", person).subscribe(
      () => {
        this._toastr.success("Personne ajoutée avec succès", person.firstName, { duration: 5000 })
      },
      (error) => {
        this._toastr.danger(error.message, { duration: 500000 })
        console.log(error)
      })
  }
 
}
