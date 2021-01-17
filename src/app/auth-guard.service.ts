// runs code before routes are passed and used here to implement route protection (auth)

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router){
    }

    // canActivate() can run synchronously with the client or asynchronously in parallel, possibly somewhere-else
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

            // isAuthenticated() is always a false promise so canActivate() redirects the user
            return this.authService.isAuthenticated().then(
                (authenticated: boolean) => {
                    if (authenticated){
                        return true;
                    } else {
                        this.router.navigate(['/']);
                    }
                }
            );
    }
    
}