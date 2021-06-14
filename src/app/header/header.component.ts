import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AuthUser } from '../models/auth.model';
import { UserService } from '../shared/services/user.service';
import { LoginComponent } from '../user-manager/components/login/login.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser : AuthUser = {}

  constructor(
    private _us : UserService,
    private _dialog : NbDialogService
  ) { }

  ngOnInit(): void {
    this._us.currentUserSubject.subscribe((u : AuthUser) => this.currentUser = u)
    this._us.emitUser();
  }

  connect(){
    let ref = this._dialog.open(LoginDialogComponent, {
      closeOnBackdropClick : true
    })

    ref.onClose.subscribe((x : any) =>{
        console.log('subscribe')
        if(x != undefined) {
          let user = { email : x.email , password : x.password }
          console.log(user)
          this._us.login(user)
        }
      }
    )
  }

  disconnect(){
    this._us.logout()
  }

}
