import { Component } from '@angular/core';
import { Month8Service } from './services/month8.service'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "example calendar8";
  months = [];
  constructor(private monthSvc: Month8Service) {
    let today = new Date()
    today.setHours(0);
    today.setSeconds(0);
    today.setMinutes(0);

    console.log("today");
    console.log(today);

    let tomorrow = new Date()
    tomorrow.setHours(0);
    tomorrow.setSeconds(0);
    tomorrow.setMinutes(0);
    tomorrow.setDate(today.getDate() + 30);
    let iMoth = today.getMonth();
    console.log("iMoth");
    console.log(iMoth);
    let eMoth = tomorrow.getMonth();
    console.log("eMoth");
    console.log(eMoth);
    
    console.log("tomorrow");
    console.log(tomorrow);

    let i = iMoth;
    let startDate = today;
    while (i <= eMoth) {
      const {nextStartDay, monthResult} = monthSvc.getMonthMatrix(startDate, tomorrow, i);
      this.months.push(monthResult);
      startDate = nextStartDay;
      i++;
    }

  }
}
