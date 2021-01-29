import { Injectable } from '@angular/core';
import { Plannings } from '../../data/planning.json';
import { Regions } from '../../data/regions.json';
import { Logiciels } from '../../data/software.json';

export interface iInstallation {
  cip: string;
  pharmacie: string;
  logiciel: string;
  dateinstall: string;
  codepostal: string;
  ville: string;
  region: string;
}

export interface iCountry {
  id: number;
  name: string;
}
export interface iRegions {
  id: number;
  name: string;
  country: iCountry;
}

export interface iSoftware {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class WsService {
  PLANNINGS: iInstallation[] = [];
  REGIONS: iRegions[] = [];
  SOFTWARES: iSoftware[] = [];

  constructor() {
    this.PLANNINGS = this.buildPlannings();
    this.REGIONS = this.buildRegions();
    this.SOFTWARES = this.buildSoftwares();
  }

  buildRegions(): iRegions[] {
    const regions: iRegions[] = [];
    Regions.forEach((region) => {
      regions.push({
        id: region.id,
        name: region.name,
        country: region.country,
      });
    });
    return regions;
  }

  buildSoftwares(): iSoftware[] {
    const softwares: iSoftware[] = [];
    Logiciels.forEach(logiciel => {
      softwares.push({
        name: logiciel
      })
    })
    return softwares;
  }

  buildPlannings(): iInstallation[] {
    const planning: iInstallation[] = [];
    Plannings.forEach((element) => {
      planning.push({
        cip: element.cipCode,
        pharmacie: element.name,
        logiciel: element.orderedSoftware,
        dateinstall: element.installationDate,
        codepostal: element.postalCode,
        ville: element.city,
        region: element.agence.name,
      });
    });
    return planning;
  }
}
