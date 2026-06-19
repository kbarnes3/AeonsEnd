import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MarketService } from './market.service';

describe('AppComponent Generate button', () => {
  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [AppComponent, NoopAnimationsModule],
    }).compileComponents();
  });

  function renderedCardNames(fixture: { nativeElement: HTMLElement }): string[] {
    return Array.from(fixture.nativeElement.querySelectorAll('.card-tile .card-name')).map(
      (el) => (el.textContent ?? '').trim(),
    );
  }

  it('renders the regenerated market when Generate is clicked', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const marketService = TestBed.inject(MarketService);
    const expectedNames = () => (marketService.marketCards ?? []).map((card) => card.name.trim());

    // The single-game market should render on initial load.
    expect(renderedCardNames(fixture)).toEqual(expectedNames());

    const generateButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => (button.textContent ?? '').trim() === 'Generate');
    expect(generateButton).toBeTruthy();

    // Regenerate several times; the rendered DOM must stay in sync with the service state.
    // Under the OnPush regression the DOM stayed stale while the service updated.
    for (let i = 0; i < 5; i++) {
      generateButton!.click();
      fixture.detectChanges();
      expect(renderedCardNames(fixture)).toEqual(expectedNames());
    }
  });
});
