import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExpeditionStartBattleDisplayComponent } from './expedition-start-battle-display.component';

@Component({
  selector: 'app-nemesis-display',
  template: '<p>Nemesis Display</p>'
})
class MockNemesisDisplayComponent {}

describe('ExpeditionStartBattleDisplayComponent', () => {
  let component: ExpeditionStartBattleDisplayComponent;
  let fixture: ComponentFixture<ExpeditionStartBattleDisplayComponent>;

  beforeEach(waitForAsync(() => {
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
