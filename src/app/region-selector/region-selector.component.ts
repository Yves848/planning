import { Component, OnInit } from '@angular/core';
import { iSoftware, iRegions, WsService } from '../services/ws.service';

@Component({
  selector: 'app-region-selector',
  templateUrl: './region-selector.component.html',
  styleUrls: ['./region-selector.component.scss'],
})
export class RegionSelectorComponent implements OnInit {
  regions : iRegions[] = [];

  softwares : iSoftware[] = [];
  constructor(private ws: WsService) {

  }

  regionChange(event) {
    console.log('Region ', event.value);
    this.ws.fRegion = event.value;

  }

  softwareChange(event) {
    console.log('Logiciel ', event.value);
    this.ws.fLogiciel = event.value.name;
    this.ws.PLANNINGS = this.ws.buildPlannings();
  }

  ngOnInit(): void {
    this.regions = this.ws.REGIONS;
    this.softwares = this.ws.SOFTWARES;
  }
}
