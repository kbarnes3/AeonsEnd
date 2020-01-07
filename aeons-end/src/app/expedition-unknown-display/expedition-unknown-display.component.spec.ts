import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeditionUnknownDisplayComponent } from './expedition-unknown-display.component';

describe('ExpeditionUnknownDisplayComponent', () => {
  let component: ExpeditionUnknownDisplayComponent;
  let fixture: ComponentFixture<ExpeditionUnknownDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpeditionUnknownDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeditionUnknownDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
