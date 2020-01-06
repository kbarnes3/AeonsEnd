import { Component, OnInit } from '@angular/core';
import { Nemesis } from '../nemesis';
import { NemesisService } from '../nemesis.service';

@Component({
  selector: 'app-nemesis-display',
  templateUrl: './nemesis-display.component.html',
  styleUrls: ['./nemesis-display.component.css']
})
export class NemesisDisplayComponent implements OnInit {

  constructor(private nemesisService: NemesisService) { }

  nemesis: Nemesis;

  ngOnInit() {
    this.nemesisService.nemesis$.subscribe((nemesis: Nemesis) => {
      this.nemesis = nemesis;
    });
    this.nemesis = this.nemesisService.nemesis;
  }

}
