import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  private url : string = environment.urlApi1
  currentUser : User = {}
  // errorMessage : string = ''

  constructor(
    private _client : HttpClient
  ) { }

  register(user : User) {
      console.log('user param : '+ user.firstName)

      this._client.post<User>(this.url+"User/register", user).subscribe( (data : User) => {
        this.currentUser = data;
      },
        (error) => {
        // this.errorMessage = error.message;
        console.error('There was an error '+ error);
      }
    )
    console.log(this.currentUser)
  }

}

