import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  fg : FormGroup = this._builder.group([])
  currentUser : User = {email : '', password : '', firstName : '', lastName : '', birthDate : new Date()}

  constructor(
    private _builder : FormBuilder,
    private _us : UserService
  ) { }

  ngOnInit(): void {
  
   this.initForm()
  }

  initForm() : void{
    this.fg  = this._builder.group({
      email : [null, Validators.required],
      password : [null, Validators.required],
      firstName :[null, Validators.required],
      lastName :[null, Validators.required],  
      birthDate : [null, Validators.required]
      })
  }

  submitForm() {
    let user = {
      email : this.fg.value['email'],
      password :  this.fg.value['password'],
      firstName : this.fg.value['firstName'],
      lastName : this.fg.value['lastName'],  
      birthDate :  this.fg.value['birthDate']
    }
    console.log('Birthdate:' + user.birthDate)

   this._us.register(user)
  }

}
