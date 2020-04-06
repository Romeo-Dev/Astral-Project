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
      logo: 'fab fa-angular',
    },
    {
      id: 2,
      nome: 'Laravel',
      type: 'Framework',
      logo: 'fab fa-laravel',
    },
    {
      id: 3,
      nome: 'Java Spring-Boot',
      type: 'Framework',
      logo: 'fab fa-java',
    },
    {
      id: 4,
      nome: 'GraphQl',
      type: 'Framework',
      logo: 'fab fa-js-square',
    },
    {
      id: 5,
      nome: 'Electron',
      type: 'Framework',
      logo: 'fas fa-atom',
    },
    {
      id: 6,
      nome: 'Flutter',
      type: 'Framework UI',
      logo: 'fab fa-chrome',
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
