import { Component, OnInit } from '@angular/core';
import { Actor, Movie, Person } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  currentMovie : Movie = {id : 0}
  // listActors : Actor[] = []
  // scenarist : Person = {}
  // realisator : Person = {}

  constructor(
    private _ms : MovieService
  ) { }

  ngOnInit(): void {
    this.getOne(1)
  }

  getOne (id : number) {
    this._ms.getOne(id).subscribe(
    (data : Movie)  => {
      this.currentMovie = data
      console.log(this.currentMovie)
    },
    (error) => console.log(error.message), 
    () => console.log('finally')
    )
  }

}
