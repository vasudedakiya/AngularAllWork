import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUserService } from '../api-user.service';
import { User } from '../user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  userDetail: User = new User();

  id: number = 0;

  constructor(private _api: ApiUserService, private _activeRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.id = this._activeRoute.snapshot.params.id

    if (this.id === undefined) {
      this.id = 0;
    }

    else {
      this._api.getUserById(this.id).subscribe((res: any) => {
        this.userDetail = res;
      });
    }
  }

  userAdd() {

    if (this.id === 0) {
      this._api.insert(this.userDetail).subscribe(() => {
        this._router.navigate(['user']);
      });
    }

    else {
      this._api.edit(this.userDetail, this.id).subscribe(() => {
        this._router.navigate(['user']);
      });
    }
  }

}
