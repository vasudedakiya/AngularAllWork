import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiIpoCalenderService {

  apiUrl = "https://finnhub.io/api/v1/calendar/ipo?from=2020-01-01&to=2020-04-30&token=";
  key = "c3904paad3ido5akbae0";
  constructor(private _http: HttpClient) { }

  getIpoCalender() {
    return this._http.get(this.apiUrl + this.key);
  }


}
