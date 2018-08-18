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
  nroDaysIn = 0;
  monthNames = {"US": ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ], "ES": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Augosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"
  ]};
  constructor(private monthSvc: Month8Service) {
    this.startDateIn = "";
  }30

  generateCalendar8() {
    let dateSplitted = this.startDateIn.split('-').map(sp => Number(sp));
    let startDate = new Date(dateSplitted[0], dateSplitted[1] - 1, dateSplitted[2], 0, 0, 0); 
    let aDay = 86400000;
    let lastDate = new Date(dateSplitted[0], dateSplitted[1] - 1, dateSplitted[2], 0, 0, 0); 
    lastDate = new Date(lastDate.setTime(lastDate.getTime() + this.nroDaysIn * aDay ));
    
    let startMonth = startDate.getMonth();
    let lastMonth = lastDate.getMonth();
    let startYear = startDate.getFullYear();
    let lastYear = lastDate.getFullYear();

    let i = startMonth;
    let startDateAux = startDate;
    this.months = [];

    while ((i <= lastMonth && startYear == lastYear) || startDateAux.getTime() < lastDate.getTime()) {
      let currentYear = startDateAux.getFullYear();
      const { nextStartDay, monthResult } = this.monthSvc.generateMonthMatrix(startDateAux, lastDate, i);
      this.months.push({
        monthResult,
        monthName: this.monthNames["US"][i],
        currentYear
      });
      startDateAux = nextStartDay;
      i++;
      i = i % 12;
      startYear = startDateAux.getFullYear();
    }
  }
}
