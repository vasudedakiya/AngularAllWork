import { Component, OnInit } from '@angular/core';
import { ApiFacultyService } from '../api-faculty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css'],

})
export class FacultyComponent implements OnInit {

  faculty: any[] = [];

  constructor(private _api: ApiFacultyService, private _router: Router) { }

  ngOnInit(): void {
    this._api.getAllFacultyes().subscribe((res: any) => {
      this.faculty = res.records;
    });
  }

  showDetail(id: number) {
    this._router.navigate(['faculty', id]);
  }

}
