import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiStockNewsService {

  apiUrl = "https://finnhub.io/api/v1/company-news?symbol="
  key = "c3904paad3ido5akbae0"

  apiGenral = "https://finnhub.io/api/v1/news?category=general&token="

  constructor(private _http: HttpClient) { }

  getNewsByID(id: any) {
    return this._http.get(this.apiUrl + id + "&from=2021-03-01&to=2021-03-09&token=" + this.key);
  }

  getAllNews() {
    return this._http.get(this.apiGenral + this.key)

  }
}
