import { Mansion } from './../Models/mansion';
import { Injectable } from '@angular/core';
import { Exp } from '../Models/exp';
import { Profile } from '../Models/profile';
import { ProfileService } from './profile.service';
import { MansionService } from './mansion.service';

@Injectable({
  providedIn: 'root'
})
export class ExpService {

  exps: Exp[] = [];

  constructor(private serviceProfile: ProfileService, private serviveMansion: MansionService) { }

  getExp(profile: Profile): Exp[] {
    let nwexp: Exp[] = [];
    this.exps.forEach(ex => {
      if ((ex.profile.id === profile.id)) {
        nwexp.push(ex);
      }
    });
    return nwexp;
  }
}
