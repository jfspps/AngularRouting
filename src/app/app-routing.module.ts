import { NgModule } from "@angular/core";

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorpageComponent } from "./errorpage/errorpage.component";
import { ServerResolver } from "./servers/server/server-resolver.service";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
  
      // anything after "users/" will be stored under "args" (can use any literal here) in UserComponent;
      // note that the path can be executed from any component but the literal argsID and argsName are only handled by UserComponent   
      { path: ':argsID/:argsName', component: UserComponent}
    ] },
    // child components are not loaded by default with <router-outlet> since this is reserved for higher-level, parent routes
    // see ServersComponent.html for an additional <router-outlet> where the child routes are loaded
    // protect all /servers routes with AuthGuard
    { path: 'servers',
    // canActivate: [AuthGuard], 
    canActivateChild: [AuthGuard],  // protect child components only (enabling canActivate would 'disable' ServersComponent)
    component: ServersComponent, children: [
      { path: ':id', component: ServerComponent, resolve: {serverObj: ServerResolver} },
      { path: ':argsID/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    ] },
    // { path: 'not-found', component: PageNotFoundComponent},
        { path: 'not-found', component: ErrorpageComponent, data: {message: 'Page not found!'} },
    // like NodeJS, make sure the generic route below comes last!
    { path: '**', redirectTo: '/not-found'}
    // to redirect when using an empty path, use { path: '', redirectTo: '/not-found', pathMatch: 'full' } to avoid permanent redirection
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        // what is accessible to modules which access this module, appRouting
        RouterModule
    ]
})
export class AppRoutingModule {

}