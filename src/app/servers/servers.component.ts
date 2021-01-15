import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  // the third parameter is need when a second parameter is passed to navigate() to inject the current path
  constructor(private serversService: ServersService,
    private router: Router,
    private currentPath: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  reloadServers(){
    console.log('reload servers requested...');

    // relative link; note that navigate() does not know about the current path (unlike routerLink in appComponent)
    this.router.navigate(['servers']);

    // relative link again, but with the current route/path injected into navigate
    // (without the second paramter, Angular defaults currentPath to root "/")

    // this would fail because when viewing the servers component, the currentPath is "/servers" and so
    // navigate() attempts to access "/servers/servers"
    // this.router.navigate(['servers'], {relativeTo: this.currentPath});
  }
}
