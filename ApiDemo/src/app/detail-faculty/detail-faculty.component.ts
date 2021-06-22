import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiFacultyService } from '../api-faculty.service';
import { Router } from '@angular/router';
import { Faculty } from '../faculty';

@Component({
  selector: 'app-detail-faculty',
  templateUrl: './detail-faculty.component.html',
  styleUrls: ['./detail-faculty.component.css']
})
export class DetailFacultyComponent implements OnInit {

  id: any;

  facultyDetail: Faculty = new Faculty();

  constructor(private _activeroute: ActivatedRoute, private _api: ApiFacultyService, private _router: Router) { }

  ngOnInit(): void {
    this.id = this._activeroute.snapshot.params.id
    this._api.getFacultyById(this.id).subscribe((res: any) => {
      this.facultyDetail = res;
    });
  }

  deleteFaculty(id: any) {
    this._api.deleteFaculty(id).subscribe((res: any) => {
      this._router.navigate(['allfaculty']);
    });

  }

  editFaculty() {
    this._router.navigate(['faculty/edit/', this.id])
  }


}
