import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUserService } from '../api-user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users: any;

  constructor(private _api: ApiUserService, private _router: Router) { }

  ngOnInit(): void {
    this._api.getAllUser().subscribe((res: any) => {
      this.users = res.records
    });
  }

  viewMore(id: number) {
    this._router.navigate(['user', id]);
  }

}
