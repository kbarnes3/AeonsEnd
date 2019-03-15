import {Component, OnInit} from '@angular/core';
import {Expansion} from '../expansion';

@Component({
  selector: 'app-expansion-chooser',
  templateUrl: './expansion-chooser.component.html',
  styleUrls: ['./expansion-chooser.component.css']
})
export class ExpansionChooserComponent implements OnInit {

  constructor() { }

  base: boolean;
  theDepths: boolean;
  theNameless: boolean;
  warEternal: boolean;
  theVoid: boolean;
  theOuterDark: boolean;
  diceTowerPromo: boolean;

  ngOnInit() {
  }

  getSelectedExpansions(): Expansion[] {
    const expansions: Expansion[] = [];
    if (this.base) {
      expansions.push(Expansion.Base);
    }
    if (this.theDepths) {
      expansions.push(Expansion.TheDepths);
    }
    if (this.theNameless) {
      expansions.push(Expansion.TheNameless);
    }
    if (this.warEternal) {
      expansions.push(Expansion.WarEternal);
    }
    if (this.theVoid) {
      expansions.push(Expansion.TheVoid);
    }
    if (this.theOuterDark) {
      expansions.push(Expansion.TheOuterDark);
    }
    if (this.diceTowerPromo) {
      expansions.push(Expansion.DiceTowerPromo);
    }

    return expansions;
  }

}
