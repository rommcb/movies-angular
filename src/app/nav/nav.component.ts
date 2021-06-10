import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  listMenu: NbMenuItem[] = []

  constructor() { }

  ngOnInit(): void {
    this.listMenu = [
      { link: '/user/register', title: 'Sign up' }, 
      { link: '/user/login', title: 'Login' },
      { link: '/movies/list', title: 'Movies' }
    ]
  }

}
