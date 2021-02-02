import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { WsService } from '../services/ws.service';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.scss']
})
export class DateSelectorComponent implements OnInit {

  constructor(private ws: WsService,
              private _adapter : DateAdapter<any>,
              private datePipe : DatePipe) {
    this._adapter.setLocale('fr');
  }

  onDateDebChange(event : MatDatepickerInputEvent<Date>) {
    console.log('Date Deb',this.datePipe.transform(event.target.value,'dd/MM/yyyy'));

  }
  onDateFinChange(event : MatDatepickerInputEvent<Date>) {
    console.log('Date Fin',this.datePipe.transform(event.target.value,'dd/MM/yyyy'));
  }

  ngOnInit(): void {
  }

}
