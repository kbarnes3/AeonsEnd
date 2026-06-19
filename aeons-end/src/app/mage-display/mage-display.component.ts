
import { Component, OnInit, inject } from '@angular/core';
import { Mage } from '../mage';
import { MageService } from '../mage.service';

@Component({
    selector: 'app-mage-display',
    imports: [],
    templateUrl: './mage-display.component.html',
    styleUrls: ['./mage-display.component.css'],
})
export class MageDisplayComponent implements OnInit {
  private mageService = inject(MageService);


  mages: Mage[] | null = null;

  ngOnInit() {
    this.mageService.mages$.subscribe((mages: Mage[] | null) => {
      this.mages = mages;
    });
    this.mages = this.mageService.mages;
  }

}
