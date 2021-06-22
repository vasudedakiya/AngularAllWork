import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor() { }
  myImg: string = "";

  ngOnInit(): void {
  }

  selectImg(e: any) {
    var reader = new FileReader();
    reader.onload = (f: any) => {
      this.myImg = f.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
  }

}
