import { TecService } from './../Services/tec.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tec } from '../Models/tec';

@Component({
  selector: 'app-select-tec',
  templateUrl: './select-tec.component.html',
  styleUrls: ['./select-tec.component.css']
})
export class SelectTecComponent implements OnInit {

  ptec: Tec[] = [];
  @Output('onSelectTec') selectTec = new EventEmitter<Tec>();

  constructor(private tecService: TecService) { }

  ngOnInit() {
    this.ptec = this.tecService.getTechById(3);
  }

  selectedTec(selected: Tec) {
    return this.selectTec.emit(selected);
  }

}
