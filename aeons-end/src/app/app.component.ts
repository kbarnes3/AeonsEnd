import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { versionInfo } from './version-info';
import { MarketSettingsComponent } from './market-settings/market-settings.component';
import { MarketDisplayComponent } from './market-display/market-display.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';

@Component({
    selector: 'app-root',
    imports: [MatToolbarModule, MarketSettingsComponent, MarketDisplayComponent, ThemeSwitcherComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Aeon\'s End Market Generator';
  gitVersion: string = versionInfo.hash;
}
