import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  moviesList : Movie[] = []

  constructor(
    private _ms : MovieService
  ) { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies() {
    this._ms.getAll().subscribe(
      (valueFromService : Movie[]) => {
        this.moviesList = valueFromService; 
        console.log(this.moviesList)
    }), 
    (error : any) => console.log(error.message)
  }

}
