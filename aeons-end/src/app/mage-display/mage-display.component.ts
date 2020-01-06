import { Component, OnInit } from '@angular/core';
import { Mage } from '../mage';
import { NEW_AGE_MAGES } from '../mages-data/new-age-mages-data';

@Component({
  selector: 'app-mage-display',
  templateUrl: './mage-display.component.html',
  styleUrls: ['./mage-display.component.css']
})
export class MageDisplayComponent implements OnInit {

  constructor() { }

  mages: Mage[];

  ngOnInit() {
    // This should subscribe to the mage service
    this.mages = [];
    this.mages.push(NEW_AGE_MAGES[0]);
    this.mages.push(NEW_AGE_MAGES[1]);
    this.mages.push(NEW_AGE_MAGES[2]);
    this.mages.push(NEW_AGE_MAGES[3]);
  }

}
