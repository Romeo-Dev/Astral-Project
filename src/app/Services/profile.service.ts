import { Injectable } from '@angular/core';
import { Profile } from '../Models/profile';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import {  HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map, mapTo } from 'rxjs/operators';
import { Project } from '../Models/project';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url = 'http://127.0.0.1:8000/api/profiles/';
  mesurl = 'http://127.0.0.1:8000/api/messages/';

  constructor(private http: HttpClient) { }

  profiles: Profile[] = [
    {
      id: 1,
      nome: 'Romeo',
      cognome: 'De Vincentis',
      // tslint:disable-next-line: max-line-length
      biography: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      img: 'assets/images/profile01.jpg',
      email: 'romeo.dv@email.com',
      indirizzo: 'Via decorati 12',
      tel: '349 6920 681',
      professione: 'Software Developer & Web Developer',
      git: 'https://github.com/Romeo-Dev',
    },
    {
      id: 2,
      nome: 'Sandra',
      cognome: 'Riverwood',
      // tslint:disable-next-line: max-line-length
      biography: 'led it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
      biography: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur',
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

  /**
   * Dialog with service 
   */
  loadProfile(id: number): Observable<Profile>{
    return this.http.get<Profile>(this.url + id);
  }

  projectList(id: number, tid: number): Observable<Project[]>{
    return this.http.get<Project[]>(this.url + id + '/tecnologies/' + tid + '/projects');
  }

  showMyAbilities(id: number): Observable<Profile>{
    return this.http.get<Profile>(this.url + id + '/abilities');
  }

  retriveMyEdu(id: number): Observable<Profile>{
    return this.http.get<Profile>(this.url + id + '/educations');
  }

  retriveMyExp(id: number): Observable<Profile>{
    return this.http.get<Profile>(this.url + id + '/experiences');
  }

  getAllProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.url);
  }

  sendMessage($message: any): Observable<Message> {
    return this.http.post<Message>(this.mesurl, $message);
  }
}
