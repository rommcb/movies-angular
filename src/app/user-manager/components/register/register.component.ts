import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  fg : FormGroup = this._builder.group([])

  constructor(
    private _builder : FormBuilder
    // private _fs : FanService
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

  submitForm() : void {}

}
