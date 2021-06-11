import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Identifiers } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { NbGlobalLogicalPosition, NbToastrService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { Casting, Movie, MovieToDal } from 'src/app/models/movie.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  moviesList: Movie[] = []
  private url: string = environment.urlApi1
  movieId : number = 0

  constructor(
    private _client: HttpClient,
    private _toastr: NbToastrService
  ) { }

  getAll(): Observable<Movie[]> {
    return this._client.get<Movie[]>(this.url + 'Movie')
  }

  getOne(id: number): Observable<Movie> {
    console.log('Hi from service getOne')

    // let header = new HttpHeaders({
    //   'authorization': 'bearer ' + sessionStorage.getItem('token')
    // })
    
    return this._client.get<Movie>(this.url + "movie/" + id/*, {headers: header}*/)
  }

  create(movie: MovieToDal, castingList : Casting[]) : void{
    console.log(movie)
    // let header = new HttpHeaders({
    //   'authorization': 'bearer ' + sessionStorage.getItem('token')
    // })
    this._client.post<number>(this.url + "movie", movie/*, {headers: header}*/).subscribe(
      (id : number) => {
        
        this.movieId = id ?? 0
        this._toastr.success("Film ajouté avec succès", movie.title, { duration: 5000 })
        console.log(castingList)
        for(let i=0; i<castingList.length; i++){ 
          this.setActor(this.movieId, castingList[i].role, castingList[i].personId)
        }
      },
      (error) => {
        this._toastr.danger(error.message, { duration: 500000 })
        console.log(error)
      })
  }

  setActor(id : number, role : string, personId : number){
    console.log('SetActor()...')
    
    let fullCasting : Casting = {
      personId : Number(personId),
      movieId : id,
      role : role
    }

    console.log(fullCasting)

    // let header = new HttpHeaders({
    //   'authorization': 'bearer ' + sessionStorage.getItem('token')
    // })

    // console.log(header)

    this._client.post<any>(this.url + "person/setActor", fullCasting/*,{headers: header}*/).subscribe(
      () => {
        this._toastr.success("Role ajouté avec succès", fullCasting.role, { duration: 5000 })
      },
      (error) => {
        this._toastr.danger(error.message, { duration: 500000 })
        console.log('Noooooo! :(')
        console.log(error)
      })
  }



}
