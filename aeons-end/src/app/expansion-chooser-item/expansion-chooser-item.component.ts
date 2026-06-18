import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatCheckbox, MatCheckboxModule} from '@angular/material/checkbox';

@Component({
    selector: 'app-expansion-chooser-item',
    imports: [MatCheckboxModule],
    templateUrl: './expansion-chooser-item.component.html',
    styleUrls: ['./expansion-chooser-item.component.css'],
})
export class ExpansionChooserItemComponent {
  @ViewChild('checkboxElement', { static: true }) checkboxElement: MatCheckbox;

  @Input() title: string;
  private _included: boolean;
  get included(): boolean {
    return this._included;
  }
  @Input()
  set included(included: boolean) {
    this._included = included;
    this.includedChange.emit(this._included);
  }
  @Output() includedChange = new EventEmitter<boolean>();

  setIndeterminate(indeterminate: boolean): void {
    this.checkboxElement.indeterminate = indeterminate;
  }

}
