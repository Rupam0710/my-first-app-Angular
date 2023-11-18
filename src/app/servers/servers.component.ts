import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: 'app-servers', //element selector
  // selector: '[app-servers]', //attribute selector
  // selector: '.app-servers', //class selector
  // template: `<app-server></app-server><app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {

  allowNewServer = false;
  serverName = '';
  serverCreationStatus = 'No server was created';
  serverCreated = false;
  servers = ['Test Server', 'Test Server2']
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;

    }, 2000);
  }

  onserverCreationStatus() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'The server was created.The name of server is:' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;

  }
}
