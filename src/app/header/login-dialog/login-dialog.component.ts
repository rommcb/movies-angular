import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  constructor(
    private _ref : NbDialogRef<LoginDialogComponent>,
    private _builder : FormBuilder
  ) { }

  fg : FormGroup = this._builder.group([])

  ngOnInit(): void {
    this.fg = this._builder.group({
      email : [null, Validators.required, Validators.email],
      password : [null, Validators.required]
    })
  }

  onSubmit(){
    let user = {
      email : this.fg.value['email'],
      password :  this.fg.value['password']
    }
    this._ref.close(user)
  }

  close(){
    this._ref.close()
  }

}
