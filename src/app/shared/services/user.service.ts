import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbGlobalLogicalPosition, NbToastrService } from '@nebular/theme';
import { Observable, Subject } from 'rxjs';
import { AuthUser } from 'src/app/models/auth.model';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  private url : string = environment.urlApi1
  currentUser : AuthUser = {}
 
  get firstname() : string {
    return sessionStorage.getItem('firstName') ?? ''
  }

  firstnameSubject : Subject<string> = new Subject<string>()
  //statusBSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.status)
  
  emitFirstName() {
    this.firstnameSubject.next(this.firstname) //correspond au Invoke() d'un delegate c# 
                                         //correspond a la méhtode Emit() d'un event js

    // this.statusBSubject.value
  }

  constructor(
    private _client : HttpClient, 
    private _toastr : NbToastrService
  ) { }

  register(user : User) {
      this._client.post(this.url+"User/register", user, {responseType : 'text'}).subscribe( 
        () => {
        this._toastr.success("Vous êtes bien enregistré", user.email, {duration : 5000})
      },
        (error) => {
        this._toastr.danger(error.message, {duration : 500000})
        console.log(error)
      },
        () => {this._toastr.info("Traitement de la méthode register() terminée", "titre", { position : NbGlobalLogicalPosition.BOTTOM_END})}
    )
  }

  login(user : any) {
    this._client.post(this.url+"Auth/auth", user).subscribe( 
      (data : object) => {
      localStorage.clear()
      sessionStorage.clear()
      this.currentUser = data
      sessionStorage.setItem('token', this.currentUser.token ?? '')
      sessionStorage.setItem('id', this.currentUser.id?.toString() ?? '0')
      sessionStorage.setItem('firstName', this.currentUser.firstName ?? '0')

      this.emitFirstName()
      this._toastr.success("Vous êtes bien connecté", user.email, {duration : 5000})
      return this.currentUser
    },
      (error) => {
      this._toastr.danger(error.message, {duration : 500000})
      console.log(error)
    },
      () => {this._toastr.info("Traitement de la méthode login() terminée", "titre", { position : NbGlobalLogicalPosition.BOTTOM_END})}
  )
}
}

