import { TecService } from './../Services/tec.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tec } from '../Models/tec';
import { FeauturedTec } from '../Models/feautured-tec';

@Component({
  selector: 'app-select-tec',
  templateUrl: './select-tec.component.html',
  styleUrls: ['./select-tec.component.css']
})
export class SelectTecComponent implements OnInit {

  ptec: FeauturedTec[] = [];
  @Output('onSelectTec') selectTec = new EventEmitter<Tec>();

  constructor(private tecService: TecService) { }

  ngOnInit() {
    this.tecService.getMyTecnologies(5)
      .subscribe(res => {
        this.ptec = res['data'];
      });
  }

  selectedTec(selected: Tec) {
    return this.selectTec.emit(selected);
  }

}
