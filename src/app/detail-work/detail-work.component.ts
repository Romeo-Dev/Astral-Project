import { ProjectService } from './../Services/project.service';
import { Project } from './../Models/project';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-work',
  templateUrl: './detail-work.component.html',
  styleUrls: ['./detail-work.component.css']
})
export class DetailWorkComponent implements OnInit {

  project: Project;

  constructor(private svproject: ProjectService,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        // Cast doveroso con la + davanti il parametro se no per default prende stringa
        this.svproject.detailProject(+params.id).subscribe(res => {
          console.log(res);
            this.project = res['data'];
        });
      }
    );
  }

}
