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

  exps: Exp[] = [
    {
      id: 1,
      ruolo: 'Front & Back end Developer',
      azienda: 'Dompeè Ind. L\'Aquila',
      descrizione: 'Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      start: new Date('2016-05-01'),
      end: new Date('2018-05-31'),
      profile: this.serviceProfile.selectProfile(3),
      mansioni: [
        this.serviveMansion.findMansion(1),
        this.serviveMansion.findMansion(2),
        this.serviveMansion.findMansion(3),
        this.serviveMansion.findMansion(4),
      ]
    },
    {
      id: 2,
      ruolo: 'Sviluppo applicazioni Mobile & Siti Web',
      azienda: 'Dev-Up Tecnologies & CO.',
      descrizione: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable',
      start: new Date('2018-09-01'),
      end: new Date(Date.now()),
      profile: this.serviceProfile.selectProfile(3),
      mansioni: [
        this.serviveMansion.findMansion(5),
        this.serviveMansion.findMansion(6),
        this.serviveMansion.findMansion(7),
        this.serviveMansion.findMansion(8),
      ]
    }
  ];

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
