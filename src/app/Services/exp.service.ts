import { Injectable } from '@angular/core';
import { Exp } from '../Models/exp';
import { Profile } from '../Models/profile';

@Injectable({
  providedIn: 'root'
})
export class ExpService {

  exps: Exp[] = [];

  constructor() { }

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
