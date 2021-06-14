import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthUser } from 'src/app/models/auth.model';
import { User } from 'src/app/models/user.model';
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
    firstName :sessionStorage.getItem('firstName') ?? null,
    token : sessionStorage.getItem('token') ?? null
  }

  constructor(
    private _builder : FormBuilder,
    private _us : UserService, 
    private _router : Router
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
    this._router.navigate(['/movies/list'])
  }

  logout(){
    console.log('logout')
    this._us.logout()
    this.sessionStorageObject = {}
  }

}
