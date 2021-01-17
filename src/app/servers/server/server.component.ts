import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
    private currentRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // this.server = this.serversService.getServer(+this.currentRoute.snapshot.params['id']);

    // // respond to changes
    // this.currentRoute.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // )

    // passing run-time objects prior to loading a route (compare to static loading where known, immutable compile-time objects are passed)
    this.currentRoute.data.subscribe(
      (data: Data) => {
        this.server = data['serverObj'];
      }
    )
  }

  onEditServer() {
    // use a relative path here (current path is "/servers/1?allowEdit=3#sectionX"); see serversComponent template
    // queryParamsHandling is set to preserve current queryParams and preserved when passing /servers/1/edit, for example
    // note that the wrong server is loaded (server 1 is loaded instead of server 3) and will be fixed later
    this.router.navigate(['edit'], {relativeTo: this.currentRoute, queryParamsHandling: 'preserve'});
  }

}
