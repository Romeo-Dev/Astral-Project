import { Injectable } from '@angular/core';
import { Mansion } from '../Models/mansion';

@Injectable({
  providedIn: 'root'
})
export class MansionService {

  mansions: Mansion[] = [];

  constructor() { }

  findMansion(id: number): Mansion {
    let tmpmansion: Mansion;
    tmpmansion = this.mansions.find(p => p.id === id);
    return tmpmansion;
  }
}
