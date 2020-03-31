import { Component, OnInit } from '@angular/core';
import { Profile } from '../Models/profile';
import { ProfileService } from '../Services/profile.service';


@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  show = false;
  profile: Profile;

  constructor(private svprofile: ProfileService) { }

  ngOnInit() {
    this.profile = this.showProfile(3);
  }

  showDetail() {
    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  showProfile(id: number): Profile{
    return this.svprofile.selectProfile(id);
  }

}
