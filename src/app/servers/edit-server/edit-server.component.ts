import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService,
    private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    // recall that this component is accessed via /servers/id/edit
    // both queryParams and fragment have subscribe() methods available which respond to changes with data and
    // enable editServerComponent to get get updated when the user is already viewing editServerComponent
    console.log('EditServer queryParams: '
    );
    console.log(this.currentRoute.snapshot.queryParams);
    
    console.log('EditServer fragment: ' +
      this.currentRoute.snapshot.fragment
    );

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
