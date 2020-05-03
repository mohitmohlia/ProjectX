import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent implements OnInit {
showSecret:boolean=false;
log=[];
  constructor() { }

  ngOnInit() {
  }

onToggleButton(){
  this.showSecret=!this.showSecret;
  this.log.push(new Date());
}

}
