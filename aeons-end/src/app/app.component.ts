import { Component } from '@angular/core';
import { versionInfo } from './version-info';
import { MarketSettingsComponent } from './market-settings/market-settings.component';
import { MarketDisplayComponent } from './market-display/market-display.component';

@Component({
    selector: 'app-root',
    imports: [MarketSettingsComponent, MarketDisplayComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Aeon\'s End Market Generator';
  gitVersion: string = versionInfo.hash;
}
