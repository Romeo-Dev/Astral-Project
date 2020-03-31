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
  abilities: Ability[] = [];

  constructor(private svprofile: ProfileService, private serviceAbility: AbilityService) { }

  ngOnInit() {
    this.profile = this.svprofile.selectProfile(3);
    this.abilities = this.showOverview(this.profile);
  }

  showOverview(profile: Profile): Ability[]{
    return this.serviceAbility.takeYourAbilities(profile);
  }

}
