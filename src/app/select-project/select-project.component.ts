import { ProjectService } from './../Services/project.service';
import { ProfileService } from './../Services/profile.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tec } from '../Models/tec';
import { Profile } from '../Models/profile';
import { Project } from '../Models/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-project',
  templateUrl: './select-project.component.html',
  styleUrls: ['./select-project.component.css']
})
export class SelectProjectComponent implements OnInit {

  @Input('select-pj') tech: Tec;
  @Output('onBack') back = new EventEmitter();
  profile: Profile;
  projects: Project[];

  constructor(private svprofile: ProfileService, private svproject: ProjectService, private route: Router) { }

  ngOnInit() {
    this.profile = this.svprofile.selectProfile(3);
    this.projects = this.svproject.getProjects(this.profile, this.tech);
  }
  
  goBack() {
    return this.back.emit();
  }

  goToProject(id: number) {
    this.route.navigate(['works', id]);
  }
}
