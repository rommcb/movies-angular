import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieToDal, Person } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/shared/services/movie.service';
import { PersonService } from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  fg: FormGroup = this._builder.group([])
  currentUser: MovieToDal = {}
  listPerson: Person[] = []

  constructor(
    private _builder: FormBuilder,
    private _ms : MovieService, 
    private _ps: PersonService
  ) { }

  ngOnInit(): void {
    this.getPeople()
    this.initForm()
  }

  initForm(): void {
    this.fg = this._builder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      releaseYear: [null, Validators.required],
      realisator: [null, Validators.required],
      scenarist: [null, Validators.required],
      actors : this._builder.array([])
    })
  }

  addRole() : void {
    this.getRoles().push(new FormControl(null, Validators.required))
  }

  getRoles() : FormArray {
    return this.fg.get('actors') as FormArray
  }

  removeRole(index : number) : void {
    this.getRoles().removeAt(index)
  }

  getPeople() {
    this._ps.getAll().subscribe(
      (personList: Person[]) => {
        this.listPerson = personList
        console.log(this.listPerson)
      },
      (error) => console.log(error.message)
    )
  }

  submitForm() {
    let movieToDAL = {
       title : this.fg.value['title'],
       description :  this.fg.value['description'],
        releaseYear : this.fg.value['releaseYear'],
        realisatorID : Number(this.fg.value['realisator']),  
        scenaristID :  Number(this.fg.value['scenarist'])
    }
     this._ms.create(movieToDAL)

     // this._ms.setActor()
  }


}
