import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { PersonToDal } from 'src/app/models/movie.model';
import { PersonService } from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent implements OnInit {
  
  fg: FormGroup = this._builder.group([])

  constructor(
    private _ps : PersonService, 
    private _builder : FormBuilder, 
    private _dialref : NbDialogRef<CreatePersonComponent>
  ) { }

  ngOnInit(): void {
    this.fg = this._builder.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required]
    })
  
  }

  submitForm(){
    let person : PersonToDal = {
      firstName : this.fg.value['firstname'],
      lastName : this.fg.value['lastname']
    }

    this._ps.create(person)

    this._dialref.close()
  }

  close(){
    this._dialref.close()
  }


}
