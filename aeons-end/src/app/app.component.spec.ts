import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Component} from '@angular/core';

@Component({
  selector: 'app-market-display',
  template: '<p>Market Display</p>'
})
class MockMarketDisplayComponent {}

@Component({
  selector: 'app-market-settings',
  template: '<p>Market Settings</p>'
})
class MockMarketSettingsComponent {}

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockMarketDisplayComponent,
        MockMarketSettingsComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Aeon's End Market Generator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Aeon\'s End Market Generator');
  });

  it('should render title in as a navbar brand', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-brand').textContent).toContain('Aeon\'s End Market Generator');
  });
});
