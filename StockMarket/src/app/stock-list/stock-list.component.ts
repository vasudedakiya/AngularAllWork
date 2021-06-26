import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiStockListService } from '../api-stock-list.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  list: any[] = [];
  showload = true;

  constructor(private _route: Router, private _apilist: ApiStockListService) { }

  ngOnInit(): void {
    this._apilist.getAllStocks().subscribe((res: any) => {
      this.list = res
      this.showload = false;
    });
  }

  showDetail(id: any) {
    this._route.navigate(['stockdetail', id])
  }

}
