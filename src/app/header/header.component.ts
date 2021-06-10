import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  firstName : string = ''

  constructor(
    private _us : UserService
  ) { }

  ngOnInit(): void {
    this._us.firstnameSubject.subscribe((value : string) => this.firstName = value)
    this._us.emitFirstName()
  }

}
