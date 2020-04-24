import { FeauturedTec } from './../Models/feautured-tec';
import { Component, OnInit } from '@angular/core';
import { Tec } from '../Models/tec';

@Component({
  selector: 'app-page-work',
  templateUrl: './page-work.component.html',
  styleUrls: ['./page-work.component.css']
})
export class PageWorkComponent implements OnInit {

  show = true;
  workIn: FeauturedTec;
  constructor() { }

  ngOnInit() {
  }

  showDetail() {
    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  selectProject(tec: FeauturedTec) {
    this.workIn = tec;
    this.showDetail();
  }
}
