import { Component, OnInit } from '@angular/core';
import { ExpService } from '../Services/exp.service';
import { Profile } from '../Models/profile';
import { Exp } from '../Models/exp';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-page-exp',
  templateUrl: './page-exp.component.html',
  styleUrls: ['./page-exp.component.css']
})
export class PageExpComponent implements OnInit {

  profile: Profile;
  exp: Exp[];
  constructor(private serviceExp: ExpService, private serviceProfile: ProfileService) { }

  ngOnInit() {
    this.profile = this.serviceProfile.selectProfile(3);
    this.exp = this.serviceExp.getExp(this.profile);
  }

}
