import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Expansion} from '../expansion';
import {EXPANSION_DEPENDENCIES, ExpansionDependency, EXPANSION_ORDER, ExpansionInfo, EXPANSION_INFO} from '../expansion-info';
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
    for (const expansion of EXPANSION_ORDER) {
      const info: ExpansionInfo = EXPANSION_INFO[expansion];
      this.displayedExpansions[expansion] = new ExpansionDisplay(expansion, info.name);
    }

    this.expansionOrder = EXPANSION_ORDER;

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

  updateExpansionCheckbox(expansion: Expansion, included: boolean): void {
    this. displayedExpansions[expansion].included = included;

    // Make sure we check or uncheck required expansions
    // based on this change
    if (included) {
      for (const dependency of EXPANSION_DEPENDENCIES) {
        if (dependency.expansion === expansion) {
          this.updateExpansionCheckbox(dependency.requiredExpansion, true);
        }
      }
    } else {
      for (const dependency of EXPANSION_DEPENDENCIES) {
          if (dependency.requiredExpansion === expansion) {
            this.updateExpansionCheckbox(dependency.expansion, false);
          }
      }
    }
  }

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
    } else if (countOfIncludedExpansions === EXPANSION_ORDER.length) {
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
    } else if (countOfIncludedExpansions === EXPANSION_ORDER.length) {
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
