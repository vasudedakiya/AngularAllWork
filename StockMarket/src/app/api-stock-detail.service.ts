import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiStockDetailService {

  apiUrlDetail = "https://finnhub.io/api/v1/stock/profile2?symbol=";
  apiUrlValue = "https://finnhub.io/api/v1/quote?symbol="
  key = "c3904paad3ido5akbae0";
  temp: any;

  constructor(private _http: HttpClient) { }

  getStockDetail(id: any) {
    this.temp = id;

    return this._http.get(this.apiUrlDetail + id + "&token=" + this.key);

  }

  getStockValue() {

    return this._http.get(this.apiUrlValue + this.temp + "&token=" + this.key);

  }
}
