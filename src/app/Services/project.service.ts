import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tec } from './../Models/tec';
import { Injectable } from '@angular/core';
import { Project } from '../Models/project';
import { TecService } from './tec.service';
import { ProfileService } from './profile.service';
import { Profile } from '../Models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url = 'http://127.0.0.1:8000/api/projects/';

  projects: Project[] = [];

  constructor(private svtec: TecService, private svdev: ProfileService, private http: HttpClient) { }

  findProject(id: number): Project{
    let tmproject: Project;
    tmproject = this.projects.find(p => p.id === id);
    return tmproject;
  }

  /**
   * Comunicazione col server
   */
  detailProject(id: number): Observable<Project>{
    return this.http.get<Project>(this.url + id);
  }
}
