import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [

    // anything after "users/" will be stored under "args" (can use any literal here) in UserComponent;
    // note that the path can be executed from any component but the literal argsID and argsName are only handled by UserComponent   
    { path: ':argsID/:argsName', component: UserComponent}
  ] },
  // child components are not loaded by default with <router-outlet> since this is reserved for higher-level, parent routes
  // see ServersComponent.html for an additional <router-outlet> where the child routes are loaded
  { path: 'servers', component: ServersComponent, children: [
    { path: ':id', component: ServerComponent },
    { path: ':argsID/edit', component: EditServerComponent }
  ] },
  { path: 'not-found', component: PageNotFoundComponent},
  // like NodeJS, make sure the generic route below comes last!
  { path: '**', redirectTo: '/not-found'}
  // to redirect when using an empty path, use { path: '', redirectTo: '/not-found', pathMatch: 'full' } to avoid permanent redirection
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
