import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  }

}
