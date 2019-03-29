import {Component, OnInit} from '@angular/core';
import {Expansion} from '../expansion';

export class ExpansionDisplay {
  constructor(expansion:Expansion, name: string) {
    this.expansion = expansion;
    this.name = name;
    this.included = false;
  }
  expansion: Expansion
  name: string;
  included: boolean;
}

@Component({
  selector: 'app-expansion-chooser',
  templateUrl: './expansion-chooser.component.html',
  styleUrls: ['./expansion-chooser.component.css']
})
export class ExpansionChooserComponent implements OnInit {

  constructor() {
    this.displayedExpansions = {};
    this.displayedExpansions[Expansion.Base] = new ExpansionDisplay(Expansion.Base, 'Base');
    this.displayedExpansions[Expansion.Base].included = true;
    this.displayedExpansions[Expansion.TheDepths] = new ExpansionDisplay(Expansion.TheDepths, 'The Depths');
    this.displayedExpansions[Expansion.TheNameless] = new ExpansionDisplay(Expansion.TheNameless, 'The Nameless');
    this.displayedExpansions[Expansion.WarEternal] = new ExpansionDisplay(Expansion.WarEternal, 'War Eternal');
    this.displayedExpansions[Expansion.TheVoid] = new ExpansionDisplay(Expansion.TheVoid, 'The Void');
    this.displayedExpansions[Expansion.TheOuterDark] = new ExpansionDisplay(Expansion.TheOuterDark, 'The Outer Dark');
    this.displayedExpansions[Expansion.DiceTowerPromo] = new ExpansionDisplay(Expansion.DiceTowerPromo, 'Dice Tower Promo');

    this.expansionOrder = [];
    this.expansionOrder.push(Expansion.Base);
    this.expansionOrder.push(Expansion.TheDepths);
    this.expansionOrder.push(Expansion.WarEternal);
  }

  expansionOrder: Expansion[];
  displayedExpansions: { [id:number]: ExpansionDisplay };

  shortLabel: string = 'Cards';

  ngOnInit() {}


  getSelectedExpansions(): Expansion[] {
    const expansions: Expansion[] = [];
    for (let key in this.displayedExpansions) {
      let value:ExpansionDisplay = this.displayedExpansions[key];
      if (value.included) {
        expansions.push(value.expansion)
      }
    }

    return expansions;
  }

}
