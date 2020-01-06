import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeditionWinDisplayComponent } from './expedition-win-display.component';

describe('ExpeditionWinDisplayComponent', () => {
  let component: ExpeditionWinDisplayComponent;
  let fixture: ComponentFixture<ExpeditionWinDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpeditionWinDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeditionWinDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
