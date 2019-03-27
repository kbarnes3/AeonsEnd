import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-expansion-chooser-item',
  templateUrl: './expansion-chooser-item.component.html',
  styleUrls: ['./expansion-chooser-item.component.css']
})
export class ExpansionChooserItemComponent implements OnInit {

  @Input() title: string;
  private _checked: boolean;
  get checked(): boolean {
    return this._checked;
  }
  @Input()
  set checked(checked: boolean) {
    this._checked = checked;
    this.checkedChanged.emit(this._checked);
  }
  @Output() checkedChanged: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
