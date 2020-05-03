import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { SecondServerComponent } from './second-server/second-server.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { AssignmentThreeComponent } from './assignment-three/assignment-three.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SecondServerComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    AssignmentThreeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
