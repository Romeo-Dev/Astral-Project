import { EduService } from './../Services/edu.service';
import { ProfileService } from './../Services/profile.service';
import { Edu } from './../Models/edu';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../Models/profile';

@Component({
  selector: 'app-page-edu',
  templateUrl: './page-edu.component.html',
  styleUrls: ['./page-edu.component.css']
})
export class PageEduComponent implements OnInit {

  profile: Profile;
  edus: Edu[];

  constructor(private serviceProfile: ProfileService, private serviceEdu: EduService) { }

  ngOnInit() {
    this.profile = this.serviceProfile.selectProfile(3);
    this.edus = this.serviceEdu.getEdu(this.profile);
  }

}
