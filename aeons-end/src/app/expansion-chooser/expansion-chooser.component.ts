import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Expansion} from '../expansion';
import {ExpansionChooserItemComponent} from '../expansion-chooser-item/expansion-chooser-item.component';
import {ExpansionSelectionService} from '../expansion-selection.service';

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
  @ViewChild('allCheck', { static: true }) allCheck: ExpansionChooserItemComponent;

  constructor(private expansionSelectionService: ExpansionSelectionService) {
    this.displayedExpansions = {};
    this.displayedExpansions[Expansion.Base] = new ExpansionDisplay(Expansion.Base, 'Base');
    this.displayedExpansions[Expansion.TheDepths] = new ExpansionDisplay(Expansion.TheDepths, 'The Depths');
    this.displayedExpansions[Expansion.TheNameless] = new ExpansionDisplay(Expansion.TheNameless, 'The Nameless');
    this.displayedExpansions[Expansion.WarEternal] = new ExpansionDisplay(Expansion.WarEternal, 'War Eternal');
    this.displayedExpansions[Expansion.TheVoid] = new ExpansionDisplay(Expansion.TheVoid, 'The Void');
    this.displayedExpansions[Expansion.TheOuterDark] = new ExpansionDisplay(Expansion.TheOuterDark, 'The Outer Dark');
    this.displayedExpansions[Expansion.Legacy] = new ExpansionDisplay(Expansion.Legacy, 'Legacy III/IV');
    this.displayedExpansions[Expansion.LegacyPromo] = new ExpansionDisplay(Expansion.LegacyPromo, 'Legacy Promo');
    this.displayedExpansions[Expansion.BuriedSecrets] = new ExpansionDisplay(Expansion.BuriedSecrets, 'Buried Secrets');
    this.displayedExpansions[Expansion.DiceTowerPromo] = new ExpansionDisplay(Expansion.DiceTowerPromo, 'Dice Tower Promo');
    this.displayedExpansions[Expansion.TheNewAge] = new ExpansionDisplay(Expansion.TheNewAge, 'The New Age');
    this.displayedExpansions[Expansion.ShatteredDreams] = new ExpansionDisplay(Expansion.ShatteredDreams, 'Shattered Dreams');
  
    this.expansionOrder = [
      Expansion.Base,
      Expansion.TheDepths,
      Expansion.TheNameless,
      Expansion.WarEternal,
      Expansion.TheVoid,
      Expansion.TheOuterDark,
      Expansion.Legacy,
      Expansion.LegacyPromo,
      Expansion.BuriedSecrets,
      Expansion.DiceTowerPromo,
      Expansion.TheNewAge,
      Expansion.ShatteredDreams,
    ];

    const enabledExpansions: Expansion[] = this.expansionSelectionService.selectedExpansions;
    enabledExpansions.forEach((expansion: Expansion) => {
      this.displayedExpansions[expansion].included = true;
    });

    let allIncluded: boolean = true;
    for (const key of Object.keys(this.displayedExpansions)) {
      const value: ExpansionDisplay = this.displayedExpansions[key];
      if (!value.included) {
        allIncluded = false;
      }
    }

    this._allIncluded = allIncluded;

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
    this.updateService();
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

  private updateService(): void {
    const enabledExpansions: Expansion[] = [];
    for (const key of Object.keys(this.displayedExpansions)) {
      const value: ExpansionDisplay = this.displayedExpansions[key];
      if (value.included) {
        enabledExpansions.push(value.expansion);
      }
    }

    this.expansionSelectionService.selectedExpansions = enabledExpansions;
  }

}
