import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionChooserItemComponent } from './expansion-chooser-item.component';

describe('ExpansionChooserItemComponent', () => {
  let component: ExpansionChooserItemComponent;
  let fixture: ComponentFixture<ExpansionChooserItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionChooserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
