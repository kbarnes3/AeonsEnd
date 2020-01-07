import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MageDisplayComponent } from './mage-display.component';

describe('MageDisplayComponent', () => {
  let component: MageDisplayComponent;
  let fixture: ComponentFixture<MageDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MageDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
