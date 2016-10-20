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
require('rxjs/add/operator/toPromise');
var RecordService = (function () {
    function RecordService(http, config) {
        this.http = http;
        this.config = config;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.url = this.config.HostUrl + '/record/query'; // URL to web api
    }
    RecordService.prototype.getRecordPage = function (pageIndex, pageSize, sort, filters) {
        console.log("pageIndex:" + pageIndex);
        console.log("pageSize:" + pageSize);
        var params = "?pageIndex=" + pageIndex + "&pageSize=" + pageSize;
        if (filters.length) {
            for (var i = 0; i < filters.length; i++) {
                params = params + "&" + filters[i].name + "=" + filters[i].filterKey;
                console.log("filters" + i + ":" + filters[i].name + " " + filters[i].filterKey);
            }
        }
        if (sort.name) {
            var sortStr = sort.sort == "asc" ? sort.name : "-" + sort.name;
            params = params + "&sort=" + sortStr;
            console.log("sort:" + sortStr);
        }
        return this.http.get(this.url + params).toPromise()
            .then(function (response) { return response.json(); });
    };
    RecordService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, config_service_1.ConfigService])
    ], RecordService);
    return RecordService;
}());
exports.RecordService = RecordService;
var Record = (function () {
    function Record() {
    }
    return Record;
}());
exports.Record = Record;
//# sourceMappingURL=record.service.js.map