import { Component } from '@angular/core';
import { versionInfo } from './version-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aeon\'s End Market Generator';
  gitVersion: string = versionInfo.hash;
}
