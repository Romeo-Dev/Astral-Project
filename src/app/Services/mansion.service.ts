import { Injectable } from '@angular/core';
import { Mansion } from '../Models/mansion';

@Injectable({
  providedIn: 'root'
})
export class MansionService {

  mansions: Mansion[] = [
    {
      id: 1,
      mansione: 'Back-end Developer con Laravel',
      short_desc: 'Morbi eget odio at orci commodo lobortis. Etiam et hendrerit mi, vel pellentesque nibh.'
    },
    {
      id: 2,
      mansione: 'Angular Front-end Developer',
      short_desc: 'Donec pulvinar nisl nisi, in sodales leo vestibulum in. Integer suscipit semper mi, id ullamcorper tortor viverra et. Ut a est vel lorem commodo viverra vitae eu nunc.'
    },
    {
      id: 3,
      mansione: 'Stesura di Diagrammi uml e E-R',
      short_desc: 'Sed felis erat, ultrices id velit nec, posuere pellentesque augue. Aenean id lobortis neque. Etiam tincidunt egestas nisl, vitae lacinia nisl. Donec non dolor libero.'
    },
    {
      id: 4,
      mansione: 'Rest Web Api con Laravel',
      short_desc: 'Morbi eget odio at orci commodo lobortis. Etiam et hendrerit mi, vel pellentesque nibh.'
    },
    {
      id: 5,
      mansione: 'React JS Front-end',
      short_desc: 'Donec pulvinar nisl nisi, in sodales leo vestibulum in. Integer suscipit semper mi, id ullamcorper tortor viverra et. Ut a est vel lorem commodo viverra vitae eu nunc.'
    },
    {
      id: 6,
      mansione: 'Java Spring-Boot',
      short_desc: 'Morbi eget odio at orci commodo lobortis. Etiam et hendrerit mi, vel pellentesque nibh.'
    },
    {
      id: 7,
      mansione: 'Wordpress per Custom Web Site Template',
      short_desc: 'Sed felis erat, ultrices id velit nec, posuere pellentesque augue. Aenean id lobortis neque. Etiam tincidunt egestas nisl, vitae lacinia nisl. Donec non dolor libero.'
    },
    {
      id: 8,
      mansione: 'Sviluppo Android',
      short_desc: 'Donec pulvinar nisl nisi, in sodales leo vestibulum in. Integer suscipit semper mi, id ullamcorper tortor viverra et. Ut a est vel lorem commodo viverra vitae eu nunc.'
    },
  ];

  constructor() { }

  findMansion(id: number): Mansion {
    let tmpmansion: Mansion;
    tmpmansion = this.mansions.find(p => p.id === id);
    return tmpmansion;
  }
}
