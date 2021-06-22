import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

  apiUrl = "http://arjunbala.com/DFaculty/api.php/records/user";

  constructor(private _http: HttpClient) { }

  getAllUser() {
    return this._http.get(this.apiUrl);
  }
}
