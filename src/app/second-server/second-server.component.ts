import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-server',
  templateUrl: './second-server.component.html',
  styleUrls: ['./second-server.component.css']
})
export class SecondServerComponent implements OnInit {
allowNewServer:boolean=false;
serverCreationStatus:string ="No server created"; 
serverName:string ="INITIAL server";
serverStatus:boolean = false;
servers=["test server 1"];


username:string="";

  constructor() {
    setTimeout(() => {
      this.allowNewServer=true;
    }, 3000);
   }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverStatus=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus="server created with the server Name :"+this.serverName;
  }
  onUpdateServerName(event: Event ){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
  
}
