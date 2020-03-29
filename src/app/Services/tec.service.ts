import { Injectable } from '@angular/core';
import { Tec } from '../Models/tec';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class TecService {

  techs: Tec[] = [
    {
      id: 1,
      nome: 'Angular',
      type: 'Framework',
      logo: 'assets/images/logo/angular-icon-1.svg',
    },
    {
      id: 2,
      nome: 'Laravel',
      type: 'Framework',
      logo: 'assets/images/logo/Laravel.png',
    },
    {
      id: 3,
      nome: 'Java Spring-Boot',
      type: 'Framework',
      logo: 'assets/images/logo/spring-3.svg',
    },
    {
      id: 4,
      nome: 'GraphQl',
      type: 'Framework',
      logo: 'assets/images/logo/graphql.png',
    },
    {
      id: 5,
      nome: 'Electron',
      type: 'Framework',
      logo: 'assets/images/logo/electron.png',
    },
    {
      id: 6,
      nome: 'Flutter',
      type: 'Framework UI',
      logo: 'assets/images/logo/flutter-logo.svg',
    }
  ];

  constructor(private svdev: ProfileService) { }

  getTechById(pid: number): Tec[] {
    return this.techs;
  }

  findTec(id: number): Tec {
    let tec: Tec;
    tec = this.techs.find(t => t.id === id);
    return tec;
  }
}
