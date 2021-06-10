import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthUser } from 'src/app/models/auth.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fg : FormGroup = this._builder.group([])
  currentUser : AuthUser = {}
  sessionStorageObject : any = {
    id : sessionStorage.getItem('id') ?? 'Vous n etes pas connecté', 
    firstName :sessionStorage.getItem('firstName') ?? 'Vous n etes pas connecté',
    token : sessionStorage.getItem('token') ?? 'Vous n etes pas connecté'
  }

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
      password : [null, Validators.required]
      })
  }

  login(){
    let user = {
    email : this.fg.value['email'],
    password :  this.fg.value['password']
    }
    this._us.login(user)
    this.currentUser = this._us.currentUser
  }


}
