import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiDrugsService } from '../api-drugs.service';
import { Drugs } from '../drugs';

@Component({
  selector: 'app-add-drug',
  templateUrl: './add-drug.component.html',
  styleUrls: ['./add-drug.component.css']
})
export class AddDrugComponent implements OnInit {

  id: number = 0;
  drugDetail: Drugs = new Drugs();


  constructor(private _api: ApiDrugsService, private _route: Router, private _activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._activeRoute.snapshot.params.id;

    if (this.id === undefined) {
      this.id = 0;
    }

    else {
      this._api.getDrugById(this.id).subscribe((res: any) => {
        this.drugDetail = res;
      });
    }
  }

  insertDrug() {

    if (this.id === 0) {
      this._api.insert(this.drugDetail).subscribe(() => {
        this._route.navigate(['druglist']);
      });
    }

    else {
      this._api.edit(this.drugDetail, this.id).subscribe(() => {
        this._route.navigate(['druglist']);
      });
    }

  }

}
