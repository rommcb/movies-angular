import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { Casting, MovieToDal, Person } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/shared/services/movie.service';
import { PersonService } from 'src/app/shared/services/person.service';
import { CreatePersonComponent } from '../create-person/create-person.component';
import { ListComponent } from '../list/list.component';

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
    private _ms: MovieService,
    private _ps: PersonService,
    private dialogService: NbDialogService
  ) { }

  ngOnInit(): void {
    this.getPeople() // il faut ajouter un resolver pour notre getPeople()
    this.initForm()
  }

  initForm(): void {
    this.fg = this._builder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      releaseYear: [null, Validators.required],
      realisator: [null, Validators.required],
      scenarist: [null, Validators.required],
      actors: this._builder.array([])
    })
  }

  open() {
    let ref = this.dialogService.open(CreatePersonComponent)
    ref.onClose.subscribe(() => this.getPeople())
  }

  createItem(): FormGroup {
    return this._builder.group({
      personId: [null, Validators.required],
      role: [null, Validators.required]
    });
  }

  addRole(): void {
    this.getRoles().push(this.createItem())
  }

  getRoles(): FormArray {
    return this.fg.get('actors') as FormArray
  }

  removeRole(index: number): void {
    this.getRoles().removeAt(index)
  }

  getPeople() {
    this._ps.getAll().subscribe(
      (personList: Person[]) => {
        this.listPerson = personList
      },
      (error) => console.log(error.message)
    )
  }

  submitForm() {
    let movieToDAL = {
      title: this.fg.value['title'],
      description: this.fg.value['description'],
      releaseYear: this.fg.value['releaseYear'],
      realisatorID: Number(this.fg.value['realisator']),
      scenaristID: Number(this.fg.value['scenarist'])
    }
    let casting: Casting[] = this.fg.value['actors']
    this._ms.create(movieToDAL, casting)
  }


}
