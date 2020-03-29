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

  projects: Project[] = [
    {
      id: 1,
      nome: 'Astral - The new concept of cv',
      descrizione: 'Pellentesque mauris sapien, viverra a porta sit amet, maximus in neque. Maecenas et odio arcu. Phasellus malesuada diam finibus laoreet faucibus. Sed posuere eu libero ut tristique. Maecenas molestie, enim non euismod dignissim, odio tellus vehicula odio, eget volutpat lorem nulla ac nisi. Curabitur at porta lacus. Sed maximus lectus ipsum, eget viverra justo vulputate mollis. Nulla non pellentesque dolor, sit amet pharetra dolor.',
      tec: this.svtec.findTec(1),
      developer: this.svdev.selectProfile(3),
      screen: [
        'assets/images/screen/screen01.jpg', 'assets/images/screen/screen02.jpg'
      ]
    },
    {
      id: 2,
      nome: 'Trattorie and Fork App',
      descrizione: 't, maximus in neque. Maecenas et odio arcu. Phasellus malesuada diam finibus laoreet faucibus. Sed posuere eu libero ut tristique. Maecenas molestie, enim non euismod dignissim, odio tellus vehicula odio, eget volutpat lorem nulla ac nisi. Curabitur at porta lacus. Sed maximus lectus ipsum, eget viverra justo vulputate mollis. Nulla non pellentesque dolor, sit amet pharetra dolor.',
      tec: this.svtec.findTec(6),
      developer: this.svdev.selectProfile(3),
      screen: [
        'assets/images/screen/screen01.jpg', 'assets/images/screen/screen02.jpg'
      ]
    },
    {
      id: 3,
      nome: 'Univaq Calendar App',
      descrizione: 'Duis facilisis faucibus magna, in facilisis metus gravida vel. Fusce at lectus vitae ex dictum interdum. Praesent suscipit risus et lobortis hendrerit. Sed aliquam enim id suscipit pretium. Maecenas pulvinar viverra dui sed varius. Etiam dictum turpis id felis condimentum, a varius nibh consectetur',
      tec: this.svtec.findTec(1),
      developer: this.svdev.selectProfile(3),
      screen: [
        'assets/images/screen/screen01.jpg', 'assets/images/screen/screen02.jpg'
      ]
    },
    {
      id: 4,
      nome: 'Stamina Project Api',
      descrizione: 'Quisque eu orci et mauris luctus tempus non nec est. Maecenas vulputate nisl sed tincidunt gravida. Suspendisse porta rutrum nibh a vestibulum. Sed luctus sodales purus, quis mollis neque condimentum accumsan. Sed luctus ultricies rhoncus. Donec molestie ex nec nibh sollicitudin,',
      tec: this.svtec.findTec(4),
      developer: this.svdev.selectProfile(3),
      screen: [
        'assets/images/screen/screen01.jpg', 'assets/images/screen/screen02.jpg'
      ]
    },
    {
      id: 5,
      nome: 'Stamina/Corcel',
      descrizione: 'scelerisque ut ullamcorper sit amet, efficitur nec ipsum. Duis efficitur ex at nisl ullamcorper molestie. Mauris a tristique lorem. Donec ut facilisis risus. Pellentesque nec nunc venenatis, dapibus augue hendrerit, bibendum enim. In tincidunt aliquet ex eu ultricies. Nunc ut venenatis mi. Cras dictum dolor nisl, eu pharetra velit rhoncus at. ',
      tec: this.svtec.findTec(4),
      developer: this.svdev.selectProfile(1),
      screen: [
        'assets/images/screen/screen01.jpg', 'assets/images/screen/screen02.jpg'
      ]
    },
    {
      id: 4,
      nome: 'Neat-App',
      descrizione: 'Sed et dignissim sem. Fusce elementum sapien nec ligula venenatis, quis consequat nibh convallis. Vestibulum imperdiet urna eget dui egestas venenatis. Suspendisse sit amet tortor non ex egestas rhoncus volutpat a velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
      tec: this.svtec.findTec(1),
      developer: this.svdev.selectProfile(1),
      screen: [
        'assets/images/screen/screen01.jpg', 'assets/images/screen/screen02.jpg'
      ]
    }
  ];

  constructor(private svtec: TecService, private svdev: ProfileService) { }

  getProjects(profile: Profile, ptec: Tec): Project[]{
    let mypj: Project[] = [];
    this.projects.forEach(pj => {
      if ((pj.developer.id === profile.id) && pj.tec.id === ptec.id) {
        mypj.push(pj);
      }
    });
    return mypj;
  }

  findProject(id: number): Project{
    let tmproject: Project;
    tmproject = this.projects.find(p => p.id === id);
    return tmproject;
  }
}
