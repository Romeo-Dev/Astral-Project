import { Injectable } from '@angular/core';
import { Profile } from '../Models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  profiles: Profile[] = [
    {
      id: 1,
      nome: 'Romeo',
      cognome: 'De Vincentis',
      // tslint:disable-next-line: max-line-length
      descrizione: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      img: 'assets/images/profile01.jpg',
      email: 'romeo.dv@email.com',
      indirizzo: 'Via decorati 12',
      tel: '349 6920 681',
      professione: 'Software Developer & Web Developer',
      git: 'https://github.com/Romeo-Dev'
    },
    {
      id: 2,
      nome: 'Sandra',
      cognome: 'Riverwood',
      // tslint:disable-next-line: max-line-length
      descrizione: 'led it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      img: 'assets/images/profile02.jpg',
      email: 'sandra.riverwood@email.com',
      indirizzo: 'Via Riften 12',
      tel: '348 6090 521',
      professione: 'Web Designer & Game Designer',
    },
    {
      id: 3,
      nome: 'Loren',
      cognome: 'Gondor',
      // tslint:disable-next-line: max-line-length
      descrizione: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur',
      img: 'assets/images/profile03.jpg',
      email: 'loren.gondor@email.com',
      indirizzo: 'Via Cancello nero 15',
      tel: '348 4554 636',
      professione: 'Angular developer & Back-End developer',
    }
  ];

  selectProfile(id: number): Profile {
    let person: Profile;
    person = this.profiles.find(p => p.id === id);
    return person;
  }
}
