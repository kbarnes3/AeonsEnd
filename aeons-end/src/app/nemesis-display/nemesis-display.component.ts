import { Component, OnInit } from '@angular/core';
import { Nemesis } from '../nemesis';
import { NEW_AGE_NEMESES } from '../nemeses-data/new-age-nemeses-data';

@Component({
  selector: 'app-nemesis-display',
  templateUrl: './nemesis-display.component.html',
  styleUrls: ['./nemesis-display.component.css']
})
export class NemesisDisplayComponent implements OnInit {

  constructor() { }

  nemesis: Nemesis;

  ngOnInit() {
    // This should subscribe to the nemesis service
    this.nemesis = NEW_AGE_NEMESES[0];
  }

}
