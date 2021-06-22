import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiDrugsService } from '../api-drugs.service';
import { Drugs } from '../drugs';


@Component({
  selector: 'app-drugdetails',
  templateUrl: './drugdetails.component.html',
  styleUrls: ['./drugdetails.component.css']
})
export class DrugdetailsComponent implements OnInit {

  drugDetail: Drugs = new Drugs;
  id: any;
  constructor(private _activatedRoute: ActivatedRoute, private _api: ApiDrugsService, private _router: Router) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params.id;

    this._api.getDrugById(this.id).subscribe((res: any) => {
      this.drugDetail = res;
    });
  }

  deleteDrug() {
    this._api.delete(this.id).subscribe(() => {
      this._router.navigate(['druglist']);
    });

  }

  editDrug() {
    this._router.navigate(['drug/edit', this.id])
  }

}
