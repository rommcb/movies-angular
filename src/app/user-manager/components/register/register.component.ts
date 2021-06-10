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
  currentUser : User = {}

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
      birthDate : [null, Validators.required]
      })
  }

  submitForm() {
    let user = {
      email : this.fg.value['email'],
      password :  this.fg.value['password'],
      firstName : this.fg.value['firstName'], 
      birthDate :  this.fg.value['birthDate']
    }
    console.log('Avant appel:' + user.firstName)

   this._us.register(user)

    console.log('Après appel')

    if (this._us.currentUser != null) {
     console.log(this._us.currentUser.firstName + ' a bien été enregistré')
    }
  }

}
