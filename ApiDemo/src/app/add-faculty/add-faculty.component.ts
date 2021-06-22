import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFacultyService } from '../api-faculty.service';
import { Faculty } from '../faculty';



@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {

  facultyDetail: Faculty = new Faculty();
  id = 0;

  constructor(private _api: ApiFacultyService, private _route: Router, private _activatedRout: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this._activatedRout.snapshot.params.id;

    if (this.id === undefined) {
      this.id = 0;
    }

    else {
      this._api.getFacultyById(this.id).subscribe((res: any) => {
        this.facultyDetail = res;
      });
    }

  }

  insertFaculty() {

    if (this.id === 0) {
      this._api.addFaculty(this.facultyDetail).subscribe(() => {
        this._route.navigate(['allfaculty']);
      });
    }

    else {
      this._api.update(this.facultyDetail, this.id).subscribe(() => {
        this._route.navigate(['allfaculty']);
      });
    }

  }

  // https://source.unsplash.com/300x300/?man

}
