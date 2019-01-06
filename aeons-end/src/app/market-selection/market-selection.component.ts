import { Component, OnInit } from '@angular/core';
import { MarketSource } from "../market-source";

@Component({
  selector: 'app-market-selection',
  templateUrl: './market-selection.component.html',
  styleUrls: ['./market-selection.component.css']
})
export class MarketSelectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  generateMarket(marketSource: MarketSource) {

  }

}
