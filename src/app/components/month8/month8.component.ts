import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-month8',
  templateUrl: './month8.component.html',
  styleUrls: ['./month8.component.css']
})
export class Month8Component implements OnInit {

  @Input() monthValues: any;
  constructor() {
    this.monthValues = [];
  }

  ngOnInit() {
  }

}
