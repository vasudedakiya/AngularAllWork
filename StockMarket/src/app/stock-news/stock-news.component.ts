import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiStockNewsService } from '../api-stock-news.service';
import { StockNewsClass } from '../stock-news-class';
@Component({
  selector: 'app-stock-news',
  templateUrl: './stock-news.component.html',
  styleUrls: ['./stock-news.component.css']
})
export class StockNewsComponent implements OnInit {

  id: any;
  news: Array<StockNewsClass> = new Array;
  noNews = false;

  constructor(private _apiNews: ApiStockNewsService, private _activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._activeRoute.snapshot.params.id;

    this._apiNews.getNewsByID(this.id).subscribe((res: any) => {
      this.news = res;
      if (this.news.length === 0) {
        this.noNews = true;
      }

    });
  }


}
