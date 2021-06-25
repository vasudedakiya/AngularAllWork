import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiStockListService {

  apiUrl = "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=";
  key = "c3904paad3ido5akbae0"

  constructor(private _http: HttpClient) { }

  getAllStocks() {
    return this._http.get(this.apiUrl + this.key);
  }
}
