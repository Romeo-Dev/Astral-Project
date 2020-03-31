import { Injectable } from '@angular/core';
import { Skill } from '../Models/skill';
import { Ability } from '../Models/ability';
import { ProfileService } from './profile.service';
import { Profile } from '../Models/profile';
import { SkillService } from './skill.service';

@Injectable({
  providedIn: 'root'
})
export class AbilityService {

  /**
   * Tutte le abilita del sistema
   */
    abilita: Ability[] = [
    {
      id: 1,
      name: 'Front-end',
      icon: 'fas fa-file-code',
      percent: 40,
      profile: this.serviceprofile.selectProfile(3),
      skills: [
        this.serviceSkill.findSkill(1),
        this.serviceSkill.findSkill(2),
        this.serviceSkill.findSkill(3),
        this.serviceSkill.findSkill(4),
        this.serviceSkill.findSkill(5),
      ]
    },
    {
      id: 2,
      name: 'Back-end',
      icon: 'fas fa-database',
      percent: 75,
      profile: this.serviceprofile.selectProfile(3),
      skills: [
        this.serviceSkill.findSkill(10),
        this.serviceSkill.findSkill(11),
        this.serviceSkill.findSkill(12),
        this.serviceSkill.findSkill(13),
      ]
    },
    {
      id: 3,
      name: 'Microsoft Package',
      icon: 'fab fa-microsoft',
      percent: 35,
      profile: this.serviceprofile.selectProfile(3),
      skills: [
        this.serviceSkill.findSkill(14),
        this.serviceSkill.findSkill(15),
        this.serviceSkill.findSkill(16),
        this.serviceSkill.findSkill(17),
      ]
    },
    {
      id: 4,
      name: 'Adobe package',
      icon: 'fab fa-adobe',
      percent: 35,
      profile: this.serviceprofile.selectProfile(3),
      skills: [
        this.serviceSkill.findSkill(18),
        this.serviceSkill.findSkill(19),
        this.serviceSkill.findSkill(20),
        this.serviceSkill.findSkill(22),
        this.serviceSkill.findSkill(23),
        this.serviceSkill.findSkill(24),
      ]
    },
    {
      id: 5,
      name: 'Adobe package light',
      icon: 'fab fa-adobe',
      percent: 25,
      profile: this.serviceprofile.selectProfile(2),
      skills: [
        this.serviceSkill.findSkill(18),
        this.serviceSkill.findSkill(19),
        this.serviceSkill.findSkill(24),
      ]
    }
  ];
  /**
   * Tutte le abilita del sistema
   */
  constructor(private serviceprofile: ProfileService, private serviceSkill: SkillService) { }

  findAbility(id: number): Ability {
    let tmpability: Ability;
    tmpability = this.abilita.find(p => p.id === id);
    return tmpability;
  }

  takeYourAbilities(profile: Profile): Ability[] {
    let abilities: Ability[] = [];
    this.abilita.forEach(pj => {
      if ((pj.profile.id === profile.id)) {
        abilities.push(pj);
      }
    });
    return abilities;
  }
}
