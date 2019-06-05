import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-expansion-chooser-item',
  templateUrl: './expansion-chooser-item.component.html',
  styleUrls: ['./expansion-chooser-item.component.css']
})
export class ExpansionChooserItemComponent implements OnInit {
  @ViewChild('checkboxElement', { static: true }) checkboxElement: ElementRef;

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

  setIndeterminate(indeterminate: boolean): void {
    this.checkboxElement.nativeElement.indeterminate = indeterminate;
  }

}
