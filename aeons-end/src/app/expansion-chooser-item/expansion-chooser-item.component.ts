import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-expansion-chooser-item',
  templateUrl: './expansion-chooser-item.component.html',
  styleUrls: ['./expansion-chooser-item.component.css']
})
export class ExpansionChooserItemComponent implements OnInit {

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
  @Output() includedChange: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
