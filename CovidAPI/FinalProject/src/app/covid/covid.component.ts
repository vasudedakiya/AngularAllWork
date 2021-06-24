import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiCovidService } from '../api-covid.service';
import { Covid } from '../covid';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  constructor(private _api: ApiCovidService) { }

  covid : Array<Covid> = new Array;

 
  ngOnInit(): void {
    let ob = this._api.getCovid();
    ob.subscribe((res: any) => {
      let obj1: any[] = Object.values(res)
  
      for (let key in obj1) {
        console.log(key);
        this.covid.push(obj1[key].All)
        
      }
      
     
    });
  }



//   ------------------------------second method-----------------------------
  // covid: { country: any, confirmed: any, recovered: any, deaths: any, capital_city: any }[] = [];
  /*ngOnInit(): void {
    let ob = this._api.getCovid();
    ob.subscribe((res: any) => {
      let dataValue = []
      let obj1: any = Object.values(res)

      for (let key in obj1) {
        dataValue.push(obj1[key])
      }
      for (let d of dataValue) {
        console.log("Data Values", d.All);
        var temp = { country: (d.All.country), confirmed: (d.All.confirmed), recovered: (d.All.recovered), capital_city: (d.All.capital_city), deaths: (d.All.deaths) }
        this.covid.push(temp);

      }
    });
  }*/

}
