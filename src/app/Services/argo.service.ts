import { Injectable } from '@angular/core';
import { Argo } from '../Models/argo';

@Injectable({
  providedIn: 'root'
})
export class ArgoService {

  argument: Argo[] = [
    {
      id: 1,
      tag: 'Sistemi e Reti',
      short_desc: 'Breve introduzione agli algoritmi di crittografia dalla storia in poi... Topologie di rete, calcolo di Ip con subnetting ed altro..'
    },
    {
      id: 2,
      tag: 'Informatica',
      short_desc: 'Linguaggi Object oriented C++ & Java, algoritmi , stesura di flow-chart, programmazione di database, schema E-R, logico e relazionale con implementazion Mysql, M-Access'
    },
    {
      id: 3,
      tag: 'Tecnologie di programmazione e progettazione',
      short_desc: 'Introduzione al mondo del WEB, Tecnologie apprese HTML/CSS/PHP a livello base, prima stesura di alcune pagine statiche e dinamiche. Studio di Cavi cablati, Fibre ottiche e Wi-fi.'
    },
    {
      id: 4,
      tag: 'Gestione di Progetto',
      short_desc: 'Diagramma di Knatt, Processo di sviluppo del sw, metodologia Back-on e a cascata, studio di fattibilità.'
    },
    {
      id: 5,
      tag: 'Programmazione di Sistema',
      short_desc: 'Linux system, Kernel Programmazione basso  livello in c e in bash'
    },
    {
      id: 6,
      tag: 'Programmazione C99, C89',
      short_desc: 'Differende dei vari tipi di linguaggi e stesura di alcuni programmi, script bash tramite comandi'
    },
    {
      id: 7,
      tag: 'Sistemi Operativi',
      short_desc: 'Studio di vari Sistemi operativi, programmazione multithreading, Gestione di risorse e deadlock'
    },
    {
      id: 8,
      tag: 'Laravel e TEmplate Engine',
      short_desc: 'Studio di Template-Engine e del famosissimo Framework che sta diventando un nuovo standard.'
    },
    {
      id: 9,
      tag: 'Web Engineering',
      short_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.'
    },
    {
      id: 10,
      tag: 'REST Web API',
      short_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.'
    }

  ];

  constructor() { }

  findArgo(id: number): Argo{
    let tmpability: Argo;
    tmpability = this.argument.find(p => p.id === id);
    return tmpability;
  }
}
