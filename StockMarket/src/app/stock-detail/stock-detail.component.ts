import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiStockDetailService } from '../api-stock-detail.service';
import { StockDetailClass } from '../stock-detail-class';
import { StockValueClass } from '../stock-value-class';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {

  id: any;
  stockDetail: StockDetailClass = new StockDetailClass;
  stockValue: StockValueClass = new StockValueClass;
  isDetail = 1;

  constructor(private _activeRoute: ActivatedRoute, private _apiDetail: ApiStockDetailService, private _route: Router) { }

  ngOnInit(): void {
    this.id = this._activeRoute.snapshot.params.id;

    this._apiDetail.getStockDetail(this.id).subscribe((res: any) => {
      this.stockDetail = res;
      this.isDetail = Object.values(this.stockDetail).length;



    });
    this._apiDetail.getStockValue().subscribe((res: any) => {
      this.stockValue = res;
    });

  }

  stockNews(id: any) {
    this._route.navigate(['stock/news', id])
  }

}
