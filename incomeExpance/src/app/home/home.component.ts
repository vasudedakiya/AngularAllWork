import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  Date = "";
  Money = "";
  Disc = "";
  IorE = "in";
  isDisabled = true;
  selectedEntry: number = 0;
  isEdit = false;

  list: { date: string, money: number, disc: string, IorE: string }[] = [

  ]



  ngOnInit(): void {
  }

  addData() {

    let temp = { date: this.Date, money: parseInt(this.Money), disc: this.Disc, IorE: this.IorE };
    this.list.push(temp);
    this.Date = "";
    this.Money = "";
    this.Disc = "";
    this.IorE = "";
    this.buttonOn();
  }

  buttonOn() {

    if (this.Money.length != 0) {
      this.isDisabled = false;
    }
    else {
      this.isDisabled = true;
    }
  }


  Selected(i: any) {

    this.selectedEntry = i;
    this.isEdit = true;
    this.Date = this.list[i].date;
    this.Money = "" + this.list[i].money;
    this.Disc = this.list[i].disc;
    this.IorE = this.list[i].IorE;

  }

  EditData() {

    let temp1 = { date: this.Date, money: parseInt(this.Money), disc: this.Disc, IorE: this.IorE };
    this.list[this.selectedEntry] = temp1;
    this.Date = "";
    this.Money = "";
    this.Disc = "";
    this.IorE = "";
    this.isEdit = false;
  }

  DeleteEntey(i: any) {
    this.list.splice(i, 1);
  }


  selected(s: any) {

    let ss = s.target.value;
    if (ss == 'ex') {
      this.IorE = "ex";

    }
    else {
      this.IorE = "in";
    }
  }

}
