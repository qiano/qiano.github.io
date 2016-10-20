import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ConfigService } from './config.service';

import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild
} from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {
    if (this.CurrentUser!=null) { return true; }

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }

    constructor(private http: Http, private config: ConfigService, private router: Router) {
        this._currentUser = null;
    }
    private _currentUser: User;
    get CurrentUser(): User {
        return this._currentUser;
    }
    set CurrentUser(val: User) {
        this._currentUser = val;
    }


    public Login(username: string, password: string): boolean {
        if (username == "admin" && password == "123456") {
            this.CurrentUser = { Username: username, Password: password };
            return true;
        }
        return false;
    }

    public LogOut(): boolean {
        this.CurrentUser = null;
    this.router.navigate(['/login']);
        return true;
    }


}

export class User {
    Username: string;
    Password: string;
}

