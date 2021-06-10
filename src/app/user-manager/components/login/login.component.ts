import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fg : FormGroup = this._builder.group([])

  constructor(
    private _builder : FormBuilder
    ) { }

  ngOnInit(): void {
  }

}
