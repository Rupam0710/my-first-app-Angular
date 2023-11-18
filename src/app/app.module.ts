import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { successalert } from './successalert/successalert.component';
import { warningalert } from './warningalert/warningalert.component';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesAssignmentComponent } from './directives-assignment/directives-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    successalert,
    warningalert,
    DataBindingComponent,
    DirectivesAssignmentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
