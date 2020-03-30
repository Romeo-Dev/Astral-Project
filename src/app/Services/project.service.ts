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
        'assets/images/screen/screen01.jpg', 'assets/images/screen/screen02.jpg', 'assets/images/screen/screen03.jpg'
      ]
    },
    {
      id: 2,
      nome: 'Trattorie and Fork App',
      descrizione: 't, maximus in neque. Maecenas et odio arcu. Phasellus malesuada diam finibus laoreet faucibus. Sed posuere eu libero ut tristique. Maecenas molestie, enim non euismod dignissim, odio tellus vehicula odio, eget volutpat lorem nulla ac nisi. Curabitur at porta lacus. Sed maximus lectus ipsum, eget viverra justo vulputate mollis. Nulla non pellentesque dolor, sit amet pharetra dolor.',
      tec: this.svtec.findTec(6),
      developer: this.svdev.selectProfile(3),
      screen: [
        'assets/images/screen/screen04.jpg', 'assets/images/screen/screen05.jpg', 'assets/images/screen/screen06.jpg'
      ]
    },
    {
      id: 3,
      nome: 'Univaq Calendar App',
      descrizione: 'Duis facilisis faucibus magna, in facilisis metus gravida vel. Fusce at lectus vitae ex dictum interdum. Praesent suscipit risus et lobortis hendrerit. Sed aliquam enim id suscipit pretium. Maecenas pulvinar viverra dui sed varius. Etiam dictum turpis id felis condimentum, a varius nibh consectetur',
      tec: this.svtec.findTec(1),
      developer: this.svdev.selectProfile(3),
      screen: [
        'assets/images/screen/screen07.jpg', 'assets/images/screen/screen08.jpg', 'assets/images/screen/screen09.jpg'
      ]
    },
    {
      id: 4,
      nome: 'Stamina Project Api',
      descrizione: 'Quisque eu orci et mauris luctus tempus non nec est. Maecenas vulputate nisl sed tincidunt gravida. Suspendisse porta rutrum nibh a vestibulum. Sed luctus sodales purus, quis mollis neque condimentum accumsan. Sed luctus ultricies rhoncus. Donec molestie ex nec nibh sollicitudin,',
      tec: this.svtec.findTec(4),
      developer: this.svdev.selectProfile(3),
      screen: [
        'assets/images/screen/screen10.jpg', 'assets/images/screen/screen11.jpg', 'assets/images/screen/screen12.jpg'
      ]
    },
    {
      id: 5,
      nome: 'Stamina/Corcel',
      descrizione: 'scelerisque ut ullamcorper sit amet, efficitur nec ipsum. Duis efficitur ex at nisl ullamcorper molestie. Mauris a tristique lorem. Donec ut facilisis risus. Pellentesque nec nunc venenatis, dapibus augue hendrerit, bibendum enim. In tincidunt aliquet ex eu ultricies. Nunc ut venenatis mi. Cras dictum dolor nisl, eu pharetra velit rhoncus at. ',
      tec: this.svtec.findTec(4),
      developer: this.svdev.selectProfile(1),
      screen: [
        'assets/images/screen/screen13.jpg', 'assets/images/screen/screen14.jpg', 'assets/images/screen/screen15.jpg'
      ]
    },
    {
      id: 6,
      nome: 'Neat-App',
      descrizione: 'Sed et dignissim sem. Fusce elementum sapien nec ligula venenatis, quis consequat nibh convallis. Vestibulum imperdiet urna eget dui egestas venenatis. Suspendisse sit amet tortor non ex egestas rhoncus volutpat a velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
      tec: this.svtec.findTec(1),
      developer: this.svdev.selectProfile(1),
      screen: [
        'assets/images/screen/screen07.jpg', 'assets/images/screen/screen08.jpg', 'assets/images/screen/screen09.jpg'
      ]
    },
    {
      id: 7,
      nome: 'Time-Tree App',
      descrizione: 'Suspendisse potenti. Nunc non ex volutpat, condimentum augue quis, ornare enim. Mauris non orci tellus. Etiam diam velit, finibus ut nibh nec, pretium rutrum massa. Nam efficitur augue velit, sit amet tincidunt urna cursus ultrices. Praesent quis leo hendrerit, sollicitudin nunc non, ornare sapien. Suspendisse potenti. ',
      tec: this.svtec.findTec(5),
      developer: this.svdev.selectProfile(3),
      screen: [
        'assets/images/screen/screen13.jpg', 'assets/images/screen/screen14.jpg', 'assets/images/screen/screen15.jpg'
      ]
    },
    {
      id: 8,
      nome: 'Native 3B Meteo',
      descrizione: 'Aliquam finibus interdum ex, in ultrices ante mollis eu. Quisque egestas in nisl quis iaculis. Phasellus arcu lectus, scelerisque ultricies sollicitudin in, hendrerit nec magna. Fusce vestibulum porttitor mauris. Integer iaculis diam est, sit amet aliquet lorem sodales et. Mauris egestas posuere porttitor. Aenean nec molestie tellus. Aliquam vitae lectus justo.  ',
      tec: this.svtec.findTec(6),
      developer: this.svdev.selectProfile(3),
      screen: [
        'assets/images/screen/screen10.jpg', 'assets/images/screen/screen11.jpg', 'assets/images/screen/screen12.jpg'
      ]
    },
    {
      id: 9,
      nome: 'Quiz Nails',
      descrizione: 'Maecenas ut aliquet nunc. Vestibulum a dolor vestibulum, consequat orci a, eleifend erat. Nullam blandit erat nec maximus iaculis. Etiam hendrerit mauris et diam ultrices bibendum. Donec imperdiet elit tellus, nec blandit felis ullamcorper a. Sed mollis nisi id nulla gravida bibendum. Nullam sodales leo non tortor maximus, nec porta est cursus. Cras placerat magna id ex bibendum vulputate. Praesent id felis lorem. Integer lacus neque, mollis ultrices vehicula venenatis, accumsan vel nulla. Ut volutpat pellentesque molestie. Nulla ex nisl, interdum sed imperdiet a, dapibus ut risus. Maecenas sem urna, pulvinar vitae porttitor pulvinar, finibus at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus tellus ligula, eget maximus. ',
      tec: this.svtec.findTec(3),
      developer: this.svdev.selectProfile(3),
      screen: [
        'assets/images/screen/screen01.jpg', 'assets/images/screen/screen02.jpg', 'assets/images/screen/screen03.jpg'
      ]
    },
    {
      id: 10,
      nome: 'Astral Web REST API',
      descrizione: 'Sed et mattis massa. Praesent malesuada sit amet leo vitae consequat. Nullam eget tincidunt massa, imperdiet pellentesque ipsum. Aliquam pulvinar egestas ligula, ac molestie neque mollis ac. Aenean tincidunt, lacus non vulputate suscipit, tortor erat dignissim ante, in dignissim lectus nisl a quam. Suspendisse vestibulum lectus turpis, quis feugiat nisl maximus ut. Integer finibus, massa sit amet mollis aliquet, odio odio lobortis nulla, at pulvinar magna velit vitae libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus pretium nunc. Curabitur a justo sodales, faucibus velit et, ultricies nisi. Integer non lectus quis felis vehicula ornare sed sit amet orci. Quisque quam magna, volutpat sit amet felis ac, hendrerit elementum nibh. Fusce dolor dui, dictum ut tempus a, volutpat vitae ante. Ut lobortis porta nunc, id dapibus nisi eleifend sit amet. Integer a purus ut metus semper elementum vel in augue. Nulla facilisi.',
      tec: this.svtec.findTec(2),
      developer: this.svdev.selectProfile(3),
      screen: [
        'assets/images/screen/screen04.jpg', 'assets/images/screen/screen05.jpg', 'assets/images/screen/screen06.jpg'
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
