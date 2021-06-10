import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbGlobalLogicalPosition, NbToastrService } from '@nebular/theme';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  private url : string = environment.urlApi1
  // currentUser : User = {email : '', password : '', firstName : '', lastName : '', birthDate : new Date()}
 

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
}

