import { Component } from '@angular/core';
import { Month8Service } from './services/month8.service'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  months = [];
  startDateIn: string;
  nroDaysIn = 1;

  daysNamesI18N = [];

  countryCode = "US";

  constructor(private monthSvc: Month8Service) {
    this.startDateIn = "";
    this.daysNamesI18N = [];
  }

  generateCalendar8() {
    this.months = this.monthSvc.generateCalendar8(this.startDateIn, this.nroDaysIn, this.countryCode);
    this.daysNamesI18N = this.monthSvc.dayNames[this.countryCode];
  }
}
