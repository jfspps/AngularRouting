import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  loadServers(){
    // perform something via a backend etc...
    this.router.navigate(['/servers']);
  }

  // use JS methods to build a URL string: /servers/id/edit?allowEdit=1#sectionY, where id is passed from the browser
  loadServersID(id: number){
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: '1'}, fragment: 'sectionY'});
  }

  onLogin(){
    this.authService.login();
  }

  onLogout(){
    this.authService.logout();
  }
}
