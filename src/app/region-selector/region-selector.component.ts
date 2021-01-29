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

  ngOnInit(): void {
    this.regions = this.ws.REGIONS;
    this.softwares = this.ws.SOFTWARES;
  }
}
