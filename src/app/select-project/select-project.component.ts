import { ProjectService } from './../Services/project.service';
import { ProfileService } from './../Services/profile.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tec } from '../Models/tec';
import { Profile } from '../Models/profile';
import { Project } from '../Models/project';
import { Router } from '@angular/router';
import { FeauturedTec } from '../Models/feautured-tec';

@Component({
  selector: 'app-select-project',
  templateUrl: './select-project.component.html',
  styleUrls: ['./select-project.component.css']
})
export class SelectProjectComponent implements OnInit {

  @Input('select-pj') tech: FeauturedTec;
  @Output('onBack') back = new EventEmitter();
  profile: Profile;
  projects: Project[] = [];

  constructor(private svprofile: ProfileService, private svproject: ProjectService, private route: Router) { }

  ngOnInit() {
    this.loadData();
  }
  
  goBack() {
    return this.back.emit();
  }

  goToProject(id: number) {
    this.route.navigate(['works', id]);
  }

  loadData(id: number = 5){
    this.svprofile.projectList(id, this.tech.id)
        .subscribe(res => {
          this.projects = res['data'];
        });
  }
}
