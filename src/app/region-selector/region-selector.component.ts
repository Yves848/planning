import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region-selector',
  templateUrl: './region-selector.component.html',
  styleUrls: ['./region-selector.component.scss'],
})
export class RegionSelectorComponent implements OnInit {
  regions = [
    {
      id: 0,
      name: 'Grand Est',
      country: {
        id: 0,
        name: 'France',
      },
    },
    {
      id: 1,
      name: 'Sud-Ouest',
      country: {
        id: 0,
        name: 'France',
      },
    },
    {
      id: 2,
      name: 'Occitanie',
      country: {
        id: 0,
        name: 'France',
      },
    },
  ];

  softwares = [
    'Actipharm',
    'Caduciel v6',
    'Esculape v6',
    'LGPI',
    'Infosoft',
    'Leo1',
    'Leo2',
    'Lgo2',
    'Opus',
    'Periphar',
    'Pharmaland V7',
    'Pharmavitale',
    'SmartRx',
    'Vindilis',
    'VisioPharm',
    'WinPharma',
    'DynaCaisse',
  ];
  constructor() {}

  ngOnInit(): void {}
}
