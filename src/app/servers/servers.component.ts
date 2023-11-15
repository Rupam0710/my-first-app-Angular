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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;

    }, 2000);
  }

}
