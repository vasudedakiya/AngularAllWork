import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private _router: Router) { }

  isLogin = false;

  ngOnInit(): void {

    setInterval(() => {
      if (sessionStorage.getItem('asdf') === null) {
        this.isLogin = false;
      }
      else {
        this.isLogin = true;
      }
    }, 500);
  }

  Logout() {
    sessionStorage.removeItem('asdf')
    this._router.navigate(['login'])
    this.isLogin = false
  }

}
