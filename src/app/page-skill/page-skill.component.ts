import { Ability } from './../Models/ability';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../Models/profile';
import { ProfileService } from '../Services/profile.service';
import { AbilityService } from '../Services/ability.service';

@Component({
  selector: 'app-page-skill',
  templateUrl: './page-skill.component.html',
  styleUrls: ['./page-skill.component.css']
})
export class PageSkillComponent implements OnInit {

  profile: Profile;

  constructor(private svprofile: ProfileService) { }

  ngOnInit() {
    this.profile = new Profile();
    this.loadSkills(2);
  }


  loadSkills(id: number = 5){
    this.svprofile.showMyAbilities(id).subscribe(
      res => this.profile = res['data']
    );
  }

}
