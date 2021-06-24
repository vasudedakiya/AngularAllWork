import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCovidService {

  apiUrl="https://covid-api.mmediagroup.fr/v1/cases";
  // apiUrl="http://arjunbala.com/DFaculty/api.php/records/faculty"
  constructor(private _http:HttpClient) { }

  getCovid(){
    return this._http.get(this.apiUrl);
  }
}
