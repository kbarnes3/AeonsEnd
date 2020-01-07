import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeditionStartBattleDisplayComponent } from './expedition-start-battle-display.component';

@Component({
  selector: 'app-nemesis-display',
  template: '<p>Nemesis Display</p>'
})
class MockNemesisDisplayComponent {}

describe('ExpeditionStartBattleDisplayComponent', () => {
  let component: ExpeditionStartBattleDisplayComponent;
  let fixture: ComponentFixture<ExpeditionStartBattleDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExpeditionStartBattleDisplayComponent,
        MockNemesisDisplayComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeditionStartBattleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
