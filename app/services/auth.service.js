"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var config_service_1 = require('./config.service');
var router_1 = require('@angular/router');
require('rxjs/add/operator/toPromise');
var AuthService = (function () {
    function AuthService(http, config, router) {
        this.http = http;
        this.config = config;
        this.router = router;
        this._currentUser = null;
    }
    AuthService.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthService.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthService.prototype.checkLogin = function (url) {
        if (this.CurrentUser != null) {
            return true;
        }
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    };
    Object.defineProperty(AuthService.prototype, "CurrentUser", {
        get: function () {
            return this._currentUser;
        },
        set: function (val) {
            this._currentUser = val;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.Login = function (username, password) {
        if (username == "admin" && password == "123456") {
            this.CurrentUser = { Username: username, Password: password };
            return true;
        }
        return false;
    };
    AuthService.prototype.LogOut = function () {
        this.CurrentUser = null;
        this.router.navigate(['/login']);
        return true;
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, config_service_1.ConfigService, router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=auth.service.js.map