import { Component, OnInit } from '@angular/core';
import { WsService } from '../services/ws.service';






@Component({
  selector: 'app-install-list',
  templateUrl: './install-list.component.html',
  styleUrls: ['./install-list.component.scss']
})
export class InstallListComponent implements OnInit {
  displayedColumns: string[] = ['CIP', 'PHARMACIE', 'LOGICIEL','CODEPOSTAL','VILLE','REGION', 'DATEINSTALL'];
  datasource;


  constructor(private ws:WsService) { }



  ngOnInit(): void {
    this.datasource = this.ws.PLANNINGS;
    //console.log(this.datasource);
  }

}
