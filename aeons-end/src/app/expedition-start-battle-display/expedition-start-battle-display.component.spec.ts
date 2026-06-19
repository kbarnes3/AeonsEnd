import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeditionStartBattleDisplayComponent } from './expedition-start-battle-display.component';
import { NemesisDisplayComponent } from '../nemesis-display/nemesis-display.component';

@Component({
    selector: 'app-nemesis-display',
    template: '<p>Nemesis Display</p>',
})
class MockNemesisDisplayComponent {}

describe('ExpeditionStartBattleDisplayComponent', () => {
  let component: ExpeditionStartBattleDisplayComponent;
  let fixture: ComponentFixture<ExpeditionStartBattleDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({})
    .overrideComponent(ExpeditionStartBattleDisplayComponent, {
      remove: {
        imports: [NemesisDisplayComponent]
      },
      add: {
        imports: [MockNemesisDisplayComponent]
      }
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeditionStartBattleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
