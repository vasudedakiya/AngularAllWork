import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiDrugsService } from '../api-drugs.service';
import { ApiUserService } from '../api-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserNametxt: string = "";
  Passwordtxt: string = "";

  constructor(private _apiuser: ApiUserService, private _router: Router) { }

  ngOnInit(): void {
  }

  checkLogin() {
    this._apiuser.getAllUser().subscribe((res: any) => {

      res.records.forEach((temp: { UserName: string, Password: string }) => {

        if (temp.UserName == this.UserNametxt && temp.Password == this.Passwordtxt) {
          sessionStorage.setItem('asdf', this.UserNametxt);
          this._router.navigate([''])
        }

      });

      this.UserNametxt = "";
      this.Passwordtxt = "";

    });


  }

}
