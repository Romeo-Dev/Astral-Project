import { ProfileService } from './../Services/profile.service';
import { Profile } from './../Models/profile';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Message } from '../Models/message';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.css']
})
export class PageContactComponent implements OnInit {

  profiles: Profile[] = [];
  message: Message;

  messageForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(20)]],
    last_name: ['', [Validators.required, Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9.@]*')]],
    subject: ['', [Validators.required, Validators.maxLength(70)]],
    content: ['', [Validators.required, Validators.maxLength(500), Validators.minLength(50)]],
    profile_id: ['', [Validators.required]]
  });

  constructor(private serviceProfile: ProfileService, private fb: FormBuilder) { }

  ngOnInit() {
    this.loadProfiles();
  }

  loadProfiles() {
    this.serviceProfile.getAllProfiles().subscribe(
      res => this.profiles = res['data']
    );
  }

  onSubmit() {
    this.message = this.messageForm.value;
    console.log(this.message);
  }

}
