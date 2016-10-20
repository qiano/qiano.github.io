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
var platform_browser_1 = require('@angular/platform-browser');
var admin_routing_1 = require('./admin.routing');
var admin_component_1 = require('./admin.component');
var query_component_1 = require('./pages/query.component');
var qrcode_component_1 = require('./pages/qrcode.component');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var http_1 = require('@angular/http');
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                ng2_bootstrap_1.PaginationModule,
                ng2_bootstrap_1.DatepickerModule,
                ng2_bootstrap_1.DropdownModule,
                ng2_bootstrap_1.ModalModule,
                http_1.HttpModule,
                admin_routing_1.routing
            ],
            declarations: [
                admin_component_1.AdminComponent, query_component_1.QueryComponent, qrcode_component_1.QrcodeComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map