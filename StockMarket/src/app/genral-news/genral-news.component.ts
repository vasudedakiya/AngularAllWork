import { Component, OnInit } from '@angular/core';
import { ApiStockNewsService } from '../api-stock-news.service';
import { StockNewsClass } from '../stock-news-class';

@Component({
  selector: 'app-genral-news',
  templateUrl: './genral-news.component.html',
  styleUrls: ['./genral-news.component.css']
})
export class GenralNewsComponent implements OnInit {
  news: Array<StockNewsClass> = new Array;

  constructor(private _apiGenralNews: ApiStockNewsService) { }

  ngOnInit(): void {
    this._apiGenralNews.getAllNews().subscribe((res: any) => {
      this.news = res;

    });
  }

}
