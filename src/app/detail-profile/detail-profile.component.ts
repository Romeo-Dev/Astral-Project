import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../Models/profile';

@Component({
  selector: 'app-detail-profile',
  templateUrl: './detail-profile.component.html',
  styleUrls: ['./detail-profile.component.css']
})
export class DetailProfileComponent implements OnInit {

  @Input() detail: Profile;

  constructor() { }

  ngOnInit() {
  }

}
