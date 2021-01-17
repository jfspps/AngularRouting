import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateGuard {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowedToEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
    private currentRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // recall that this component is accessed via /servers/id/edit
    // both queryParams and fragment have subscribe() methods available which respond to changes with data and
    // enable editServerComponent to get get updated when the user is already viewing editServerComponent
    console.log('EditServer queryParams: '
    );
    console.log(this.currentRoute.snapshot.queryParams);
    
    console.log('EditServer fragment: ');
    
    console.log(this.currentRoute.snapshot.fragment);

    this.currentRoute.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowedToEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    )

    // respond to changes with fragments (bookmarks)
    this.currentRoute.fragment.subscribe();

    this.server = this.serversService.getServer(+this.currentRoute.snapshot.params['argsID']);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.currentRoute});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowedToEdit){
      return true;
    }

    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved){
      return confirm('Do you want to discard changes?');
    } else {
      return true;
    }
  }
}
