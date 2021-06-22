import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

  apiUrl = "http://arjunbala.com/DFaculty/api.php/records/user";

  constructor(private _http: HttpClient) { }

  getAllUser() {
    return this._http.get(this.apiUrl);
  }

  getUserById(id: number) {
    return this._http.get(this.apiUrl + "/" + id);
  }

  delete(id: number) {
    return this._http.delete(this.apiUrl + "/" + id);
  }

  insert(form: any) {
    return this._http.post(this.apiUrl, form);
  }

  edit(form: any, id: number) {
    return this._http.put(this.apiUrl + "/" + id, form);
  }
}
