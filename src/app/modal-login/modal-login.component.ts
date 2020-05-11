import { ProfileService } from './../Services/profile.service';
import { Profile } from './../Models/profile';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ArgumentType } from '@angular/compiler/src/core';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  loading: number;
  profiles: Profile[] = [];
  profile: Profile;
  wrn_alert = true;
  succ_alert = false;

  constructor(private fb: FormBuilder, private serviceProfile: ProfileService) { }

  loginForm = this.fb.group({
    profile_id: ['', [Validators.required]]
  });

  ngOnInit() {
    this.profile = new Profile();
    this.loadProfiles();
  }

  loadProfiles() {
    this.serviceProfile.getAllProfiles().subscribe(
      res => this.profiles = res['data']
    );
  }

  onSubmit(){
    this.loading = this.loginForm.get('profile_id').value;
    this.serviceProfile.loadProfile(this.loading).subscribe(
      res => {
        this.profile = res['data'];
        console.log(this.profile);
      }
    );

    this.loginForm.reset();
    this.wrn_alert = false;
    this.succ_alert = true;
  }

  warning(){
    this.wrn_alert = false;
  }
  success(){
    this.succ_alert = false;
  }

}
