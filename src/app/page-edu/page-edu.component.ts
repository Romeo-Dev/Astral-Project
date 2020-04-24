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

  constructor(private serviceProfile: ProfileService) { }

  ngOnInit() {
    this.profile = new Profile();
    this.loadEdu();
  }

  loadEdu(id: number = 5){
    this.serviceProfile.retriveMyEdu(id).subscribe(
      res => this.profile = res['data']
    );
  }

}
