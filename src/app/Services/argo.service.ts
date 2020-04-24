import { Injectable } from '@angular/core';
import { Argo } from '../Models/argo';

@Injectable({
  providedIn: 'root'
})
export class ArgoService {

  argument: Argo[] = [];

  constructor() { }

  findArgo(id: number): Argo{
    let tmpability: Argo;
    tmpability = this.argument.find(p => p.id === id);
    return tmpability;
  }
}
