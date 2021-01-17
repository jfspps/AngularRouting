import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
    this.server = this.serversService.getServer(+this.currentRoute.snapshot.params['id']);

    // respond to changes
    this.currentRoute.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    )
  }

  onEditServer() {
    // use a relative path here (current path is "/servers/1?allowEdit=3#sectionX"); see serversComponent template
    // note that the queryParameters are not preserved at the moment and so allowedToEdit is always false (see editServerComponent)
    this.router.navigate(['edit'], {relativeTo: this.currentRoute});
  }

}
