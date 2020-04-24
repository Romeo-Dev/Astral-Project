import { ProfileService } from './../Services/profile.service';
import { Profile } from './../Models/profile';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.css']
})
export class PageContactComponent implements OnInit {

  profiles: Profile[] = [];

  /* messageForm = this.fb.group({
    name: [''],
    last_name: [''],
    email: [''],
    subject: [''],
    content: [''],
    profile_id: [''],
  }); */

  constructor(private serviceProfile: ProfileService) { }

  ngOnInit() {
    this.loadProfiles();
  }

  loadProfiles() {
    this.serviceProfile.getAllProfiles().subscribe(
      res => this.profiles = res['data']
    );
  }

}
