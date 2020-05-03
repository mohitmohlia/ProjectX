import { Component } from '@angular/core';

@Component({
    selector:'app-server',
   templateUrl:'./server.component.html',
   styleUrls: ['./server.component.css']
})
export class ServerComponent{
ServerId:number=10;
ServerStatus: string ='Offline';
constructor(){
    this.ServerStatus= Math.random() > 0.5 ? 'online' :'offline';
}
getServerStatus(){
    return this.ServerStatus;
}
getColour(){
    return this.ServerStatus==='online'? 'green':'red';
}
}
