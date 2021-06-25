import { Component, OnInit } from '@angular/core';
import { ApiIpoCalenderService } from '../api-ipo-calender.service';
import { IpoCalender } from '../ipo-calender';

@Component({
  selector: 'app-ipo-calander',
  templateUrl: './ipo-calander.component.html',
  styleUrls: ['./ipo-calander.component.css']
})
export class IpoCalanderComponent implements OnInit {

  ipos: Array<IpoCalender> = new Array;

  constructor(private _apiIpo: ApiIpoCalenderService) { }

  ngOnInit(): void {
    this._apiIpo.getIpoCalender().subscribe((res: any) => {
      this.ipos = res.ipoCalendar;
    });
  }

}
