import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Month8Service {

  monthNames = {"US": ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ], "ES": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Augosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"
  ]};

  dayNames = {"US": [ "S", "M", "T", "W", "T", "F", "S" ], 
              "ES": [ "D", "L", "M", "M", "J", "V", "S" ]};

  constructor() { }

  generateMonthMatrix(start: Date, end: Date, month: number) {
    let result = [];
    let startAux = start;    
    while (startAux.getTime() < end.getTime() && startAux.getMonth() == month) {
      let weekAux = [0, 0 , 0, 0, 0, 0, 0];
      for (var i = startAux.getDay(); i < 7; i++) {
        if (startAux.getTime() >= end.getTime() ||  startAux.getMonth() != month) continue;
        weekAux[startAux.getDay() % 7] = startAux.getDate();
        startAux.setDate(startAux.getDate() + 1);
      }
      result.push(weekAux)
    }

    return { nextStartDay:startAux, monthResult: result};
  }

  generateCalendar8(startDateIn: string, nroDaysIn: number, countryCode: string, ) {

    // generation crash with values more than 450
    if (nroDaysIn > 450) return [];

    const aDay = 86400000;
    let dateSplitted = startDateIn.split('-').map(sp => Number(sp));

    // init start date and end date to generate calendar
    let startDate = new Date(dateSplitted[0], dateSplitted[1] - 1, dateSplitted[2], 0, 0, 0); 
    let lastDate = new Date(dateSplitted[0], dateSplitted[1] - 1, dateSplitted[2], 0, 0, 0); 
    lastDate = new Date(lastDate.setTime(lastDate.getTime() + nroDaysIn * aDay ));
    
    // start and end month for the algorithm that generated the values
    let startMonth = startDate.getMonth();
    let lastMonth = lastDate.getMonth();
    let startYear = startDate.getFullYear();
    let lastYear = lastDate.getFullYear();

    let i = startMonth;
    let startDateAux = startDate;
    let monthNamesI18N = this.monthNames[countryCode];
    let months = [];

    // loop that generates the matrix for each month
    while ((i <= lastMonth && startYear == lastYear) || startDateAux.getTime() < lastDate.getTime()) {
      let currentYear = startDateAux.getFullYear();
      
      // generates a matrix for a month
      const { nextStartDay, monthResult } = this.generateMonthMatrix(startDateAux, lastDate, i);

      // insert in the months arrays to display later with the component month8
      months.push({
        monthResult,
        monthName: monthNamesI18N[i],
        currentYear
      });
      startDateAux = nextStartDay;
      i++;
      i = i % 12;
      startYear = startDateAux.getFullYear();
    }

    return months;
  }
}
