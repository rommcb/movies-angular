import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbGlobalLogicalPosition, NbToastrService } from '@nebular/theme';
import { Observable, Subject } from 'rxjs';
import { AuthUser } from 'src/app/models/auth.model';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private url: string = environment.urlApi1
  currentUser: AuthUser = {}

  //--------------------------------
  get firstname(): string {
    return sessionStorage.getItem('firstName') ?? ''
  }


  currentUserSubject: Subject<AuthUser> = new Subject<AuthUser>();

  emitUser() {
    if (this.currentUser == null && sessionStorage.getItem('token')) {
      this.getUser(Number.parseInt(sessionStorage.getItem('token') ?? '')).subscribe(
        (data: AuthUser) => {
          this.currentUser = data;
          this.currentUserSubject.next(this.currentUser)
        }
      )
    }
    else {
      this.currentUserSubject.next(this.currentUser)
    }
  }

  decodeToken(token: string): number {
    let decodedToken: any = jwt_decode(token)
    return Number.parseInt(decodedToken['unique_name'])
  }

  // ------------------------------------------------

  constructor(
    private _client: HttpClient,
    private _toastr: NbToastrService
  ) { }

  getUser(id: number): Observable<User> {
    return this._client.get<User>(this.url + '/user/' + id)
  }

  register(user: User) {
    this._client.post(this.url + "User/register", user, { responseType: 'text' }).subscribe(
      () => {
        this._toastr.success("Vous êtes bien enregistré", user.email, { duration: 5000 })
      },
      (error) => {
        this._toastr.danger(error.message, { duration: 500000 })
        console.log(error)
      },
      () => { this._toastr.info("Traitement de la méthode register() terminée", "titre", { position: NbGlobalLogicalPosition.BOTTOM_END }) }
    )
  }

  login(user: any) {
    this._client.post(this.url + "Auth/auth", user).subscribe(
      (data: object) => {

        this.currentUser = data
        sessionStorage.setItem('token', this.currentUser.token ?? '')
        sessionStorage.setItem('firstName', this.currentUser.firstName ?? '0')
        sessionStorage.setItem('isAdmin', this.currentUser.isAdmin?.toString() ?? false.toString())

        this.emitUser()

        this._toastr.success("Vous êtes bien connecté", user.email, { position: NbGlobalLogicalPosition.TOP_END, duration: 5000 })

        return this.currentUser
      }, (error) => { this._toastr.danger(error.message, { duration: 500000 }) }
    )
  }

  logout() {
    localStorage.clear()
    sessionStorage.clear()
    this.emitUser()
  }

}

