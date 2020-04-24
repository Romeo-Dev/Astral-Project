import { Injectable } from '@angular/core';
import { Edu } from '../Models/edu';
import { ProfileService } from './profile.service';
import { ArgoService } from './argo.service';
import { Profile } from '../Models/profile';

@Injectable({
  providedIn: 'root'
})
export class EduService {

  edu: Edu[] = [];

  constructor(private serviceProfile: ProfileService, private serviceArgo: ArgoService) { }

  getEdu(profile: Profile): Edu[]{
    let edus: Edu[] = [];
    this.edu.forEach(ed => {
      if ((ed.profile.id === profile.id)) {
        edus.push(ed);
      }
    });
    return edus;
  }
}
