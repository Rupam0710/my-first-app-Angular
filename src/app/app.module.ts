import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { successalert } from './successalert/successalert.component';
import { warningalert } from './warningalert/warningalert.component';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    successalert,
    warningalert,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
