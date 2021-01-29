import { Injectable, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import * as PLANNINGJS from '../../data/planning.json';
import * as REGIONSJS from '../../data/regions.json';
import * as SOFTWARESJS from '../../data/software.json';

export interface installation {
  cip : string;
  pharmacie : string;
  logiciel : string;
  dateinstall: string;
  codepostal: string;
  ville: string;
  region: string;
}

export interface regions {

}

export interface logiciels {

}

@Injectable({
  providedIn: 'root'
})

export class WsService {
  Plannings = PLANNINGJS.Plannings;
  DATA : installation[] = [];

  constructor() {
    this.DATA = this.buildPlannings();
   }

  buildPlannings() : installation[] {
      console.log(PLANNINGJS);
      const planning: installation[] = [];
      this.Plannings.forEach((element) => {
        planning.push({
          cip:element.cipCode,
          pharmacie:element.name,
          logiciel:element.orderedSoftware,
          dateinstall: element.installationDate,
          codepostal: element.postalCode,
          ville: element.city,
          region: element.agence.name
        });
      })
      return planning;
  }
}
