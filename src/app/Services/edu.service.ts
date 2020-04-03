import { Injectable } from '@angular/core';
import { Edu } from '../Models/edu';
import { ProfileService } from './profile.service';
import { ArgoService } from './argo.service';
import { Profile } from '../Models/profile';

@Injectable({
  providedIn: 'root'
})
export class EduService {

  edu: Edu[] = [
    {
      id: 1,
      qualifica: 'Perito tecnico informatico',
      // tslint:disable-next-line: max-line-length
      descrizione: 'ere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don "t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
      luogo: 'Firenze, Ettore Major',
      graduation: new Date('2010-09-25'),
      arguments: [
        this.serviceArgo.findArgo(1),
        this.serviceArgo.findArgo(2),
        this.serviceArgo.findArgo(3),
        this.serviceArgo.findArgo(4),
      ],
      profile: this.serviceProfile.selectProfile(3)
    },
    {
      id: 1,
      qualifica: 'Laura Triennale in Computer Science',
      // tslint:disable-next-line: max-line-length
      descrizione: 'ere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don "t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
      luogo: 'Università degli studi dell\'Aquila',
      graduation: new Date('2023-04-20'),
      arguments: [
        this.serviceArgo.findArgo(5),
        this.serviceArgo.findArgo(6),
        this.serviceArgo.findArgo(7),
      ],
      profile: this.serviceProfile.selectProfile(3)
    },
    {
      id: 1,
      qualifica: 'Master in Web Tecnologies',
      // tslint:disable-next-line: max-line-length
      descrizione: 'ere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don "t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
      luogo: 'Università Degli studi di Firenze',
      graduation: new Date('2025-06-06'),
      arguments: [
        this.serviceArgo.findArgo(8),
        this.serviceArgo.findArgo(9),
        this.serviceArgo.findArgo(10),
      ],
      profile: this.serviceProfile.selectProfile(3)
    },
  ];

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
