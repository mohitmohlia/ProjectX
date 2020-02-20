import { Component, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-warning-alert',
  template: `
    <p> This is the warning message </p>
  `,
  styles: [
  `
      p{
        padding : 20px;
        background-color: green;
        border: 8px solid red;
      }
  `  
  ]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
