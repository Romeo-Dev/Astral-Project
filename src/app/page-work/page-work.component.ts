import { Component, OnInit } from '@angular/core';
import { Tec } from '../Models/tec';

@Component({
  selector: 'app-page-work',
  templateUrl: './page-work.component.html',
  styleUrls: ['./page-work.component.css']
})
export class PageWorkComponent implements OnInit {

  show = true;
  workIn: Tec;
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

  selectProject(tec: Tec) {
    this.workIn = tec;
    this.showDetail();
  }
}
