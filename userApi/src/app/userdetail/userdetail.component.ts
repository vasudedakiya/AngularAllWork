import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUserService } from '../api-user.service';
import { User } from '../user';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {


  usersDetail: User = new User

  id: number = 0;

  constructor(private _activeRoute: ActivatedRoute, private _api: ApiUserService, private _router: Router) { }

  ngOnInit(): void {

    this.id = this._activeRoute.snapshot.params.id;

    this._api.getUserById(this.id).subscribe((res: any) => {
      this.usersDetail = res
    });
  }


  deleteuser() {
    this._api.delete(this.id).subscribe(() => {
      this._router.navigate(['user'])
    });
  }

  edituser() {
    this._router.navigate(['user/edit', this.id]);
  }

}
