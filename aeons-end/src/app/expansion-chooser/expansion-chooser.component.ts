import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Expansion} from '../expansion';
import {ExpansionChooserItemComponent} from '../expansion-chooser-item/expansion-chooser-item.component';

export class ExpansionDisplay {
  constructor(expansion: Expansion, name: string) {
    this.expansion = expansion;
    this.name = name;
    this.included = false;
  }
  expansion: Expansion;
  name: string;
  included: boolean;
}

@Component({
  selector: 'app-expansion-chooser',
  templateUrl: './expansion-chooser.component.html',
  styleUrls: ['./expansion-chooser.component.css']
})
export class ExpansionChooserComponent implements OnInit {
  @ViewChild('allCheck') allCheck: ExpansionChooserItemComponent;

  constructor() {
    this._allIncluded = false;
    this.displayedExpansions = {};
    this.displayedExpansions[Expansion.Base] = new ExpansionDisplay(Expansion.Base, 'Base');
    this.displayedExpansions[Expansion.Base].included = true;
    this.displayedExpansions[Expansion.TheDepths] = new ExpansionDisplay(Expansion.TheDepths, 'The Depths');
    this.displayedExpansions[Expansion.TheNameless] = new ExpansionDisplay(Expansion.TheNameless, 'The Nameless');
    this.displayedExpansions[Expansion.WarEternal] = new ExpansionDisplay(Expansion.WarEternal, 'War Eternal');
    this.displayedExpansions[Expansion.TheVoid] = new ExpansionDisplay(Expansion.TheVoid, 'The Void');
    this.displayedExpansions[Expansion.TheOuterDark] = new ExpansionDisplay(Expansion.TheOuterDark, 'The Outer Dark');
    this.displayedExpansions[Expansion.DiceTowerPromo] = new ExpansionDisplay(Expansion.DiceTowerPromo, 'Dice Tower Promo');

    this.expansionOrder = [
      Expansion.Base,
      Expansion.TheDepths,
      Expansion.TheNameless,
      Expansion.WarEternal,
      Expansion.TheVoid,
      Expansion.TheOuterDark,
      Expansion.DiceTowerPromo,
    ];

    this.updateShortLabel();
  }

  expansionOrder: Expansion[];
  displayedExpansions: { [id: number]: ExpansionDisplay };

  shortLabel: string;

  private _allIncluded: boolean;

  get allIncluded(): boolean {
    return this._allIncluded;
  }

  set allIncluded(allIncluded: boolean) {
    if (this._allIncluded === allIncluded) {
      return;
    }

    this._allIncluded = allIncluded;

    for (const key of Object.keys(this.displayedExpansions)) {
      const value: ExpansionDisplay = this.displayedExpansions[key];
      value.included = allIncluded;
    }

    this.updateSelectedExpansions();
  }

  ngOnInit() {}

  updateSelectedExpansions(): void {
    this.updateShortLabel();
    this.updateAllCheckbox();
  }

  getSelectedExpansions(): Expansion[] {
    const expansions: Expansion[] = [];
    for (const key of Object.keys(this.displayedExpansions)) {
      const value: ExpansionDisplay = this.displayedExpansions[key];
      if (value.included) {
        expansions.push(value.expansion);
      }
    }

    return expansions;
  }
  private updateShortLabel(): void {
    // The short label will either say "n expansions" or the name of a single expansion
    // if exactly 1 is selected, or "Choose expansions" if none are, or "All expansions" if all are.
    let singleExpansionName: string;
    let countOfIncludedExpansions: number = 0;
    for (const key of Object.keys(this.displayedExpansions)) {
      const value: ExpansionDisplay = this.displayedExpansions[key];
      if (value.included) {
        singleExpansionName = value.name;
        countOfIncludedExpansions++;
      }
    }

    if (countOfIncludedExpansions === 0) {
      this.shortLabel = 'Choose expansions';
    } else if (countOfIncludedExpansions === 1) {
      this.shortLabel = singleExpansionName;
    } else if (countOfIncludedExpansions === this.expansionOrder.length) {
      this.shortLabel = 'All expansions';
    } else {
      this.shortLabel = `${countOfIncludedExpansions} expansions`;
    }
  }

  private updateAllCheckbox(): void {
    let countOfIncludedExpansions: number = 0;
    for (const key of Object.keys(this.displayedExpansions)) {
      const value: ExpansionDisplay = this.displayedExpansions[key];
      if (value.included) {
        countOfIncludedExpansions++;
      }
    }

    if (countOfIncludedExpansions === 0) {
      this.allCheck.setIndeterminate(false);
      this.allIncluded = false;
    } else if (countOfIncludedExpansions === this.expansionOrder.length) {
      this.allCheck.setIndeterminate(false);
      this.allIncluded = true;
    } else {
      this.allCheck.setIndeterminate(true);
    }
  }

}
