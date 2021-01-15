import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    // retrieve the literals that follow "/users" (see appModule.ts)
    this.user = {
      id: this.currentRoute.snapshot.params['argsID'],
      name: this.currentRoute.snapshot.params['argsName']
    }

    // observe changes to parameters (to the users URL);
    // only needed when the component is updated from within the same component
    this.currentRoute.params.subscribe(
      (params: Params) => {
        this.user.id = params['argsID'];
        this.user.name = params['name'];
      }
    );
  }

  // note here that Angular will by default unsubscribe from currentRoute when Angular
  // exits userComponent; this can also be achieved manually by calling ngOnDestroy() (explained later)
}
