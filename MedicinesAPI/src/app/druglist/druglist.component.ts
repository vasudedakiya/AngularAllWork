import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiDrugsService } from '../api-drugs.service';



@Component({
  selector: 'app-druglist',
  templateUrl: './druglist.component.html',
  styleUrls: ['./druglist.component.css']
})
export class DruglistComponent implements OnInit {

  drug: any;
  constructor(private _api: ApiDrugsService, private _route: Router) { }

  ngOnInit(): void {

    this._api.drugList().subscribe((res: any) => {
      this.drug = res.records;
    });

  }

  drugDetail(id: any) {
    this._route.navigate(['drug', id]);

  }

}
