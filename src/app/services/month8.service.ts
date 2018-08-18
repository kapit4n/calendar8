import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Month8Service {

  constructor() { }

  getMonthMatrix(start: Date, end: Date, month: number) {
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

    // return the next start Date
    //startAux.setDate(startAux.getDate() + 1);

    return { nextStartDay:startAux, monthResult: result};
  }
}
