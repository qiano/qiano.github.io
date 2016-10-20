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
var record_service_1 = require('../../services/record.service');
var config_service_1 = require('../../services/config.service');
var QueryComponent = (function () {
    function QueryComponent(recordService, config) {
        this.recordService = recordService;
        this.config = config;
        this.host = this.config.HostUrl;
        this.columns = [
            { title: "ID", name: 'id', sort: 'desc', width: "80px" },
            { title: 'Patient Name', name: 'patientname', filterKey: "" },
            { title: 'Patient No.', name: 'patientno' },
            { title: 'Test', name: 'test', className: ['office-header', 'text-success'] },
            { title: 'Photo', name: 'areapath', width: "140px", disableSort: true, disableFilter: true },
            { title: 'Manufacturer', name: 'factory', },
            { title: 'Lot No.', name: 'lotno', className: 'text-warning' },
            { title: 'Judgment', name: 'result' },
            { title: 'Location', name: 'location' },
            { title: 'Operator', name: 'operator' },
            { title: 'DateTime', name: 'datetime', width: "130px" }
        ];
        this.itemsPerPage = 15; //页大小
        this.currentPage = 1; //当前页
        this.totalItems = 0; //总数
        this.maxSize = 8;
        this.numPages = 4;
        this.length = 0;
        this.issDatePickerShow = false;
        this.startDate = "";
        this.iseDatePickerShow = false;
        this.endDate = "";
    }
    QueryComponent.prototype.ngOnInit = function () {
        this.searchData();
    };
    QueryComponent.prototype.clickCol = function (col) {
        if (col.sort) {
            if (col.sort == "asc") {
                col.sort = "desc";
            }
            else {
                if (col.sort == "desc") {
                    col.sort = "";
                }
            }
        }
        else {
            col.sort = "asc";
        }
        this.columns.forEach(function (c) {
            if (c.name != col.name) {
                c.sort = "";
            }
        });
        this.searchData();
    };
    QueryComponent.prototype.filterChanged = function (col, event) {
        this.currentPage = 1;
        this.searchData();
    };
    QueryComponent.prototype.searchData = function () {
        var _this = this;
        var filters = new Array();
        var sort = {};
        this.columns.forEach(function (c) {
            if (c.filterKey) {
                var temp = {};
                temp["name"] = c.name;
                temp["filterKey"] = c.filterKey;
                filters.push(temp);
            }
            if (c.sort) {
                sort["name"] = c.name;
                sort["sort"] = c.sort;
            }
        });
        if (this.startDate != "") {
            filters.push({ name: "startdate", filterKey: this.startDate });
        }
        if (this.endDate != "") {
            filters.push({ name: "enddate", filterKey: this.endDate });
        }
        this.recordService.getRecordPage(this.currentPage, this.itemsPerPage, sort, filters).then(function (ret) {
            _this.totalItems = ret.total;
            _this.data = (ret.data);
            if (_this.totalItems > 0) {
                for (var i = 0; i < _this.data.length; i++) {
                    var temp = new Date();
                    var ticks = Number.parseInt(_this.data[i].DateTime);
                    temp.setTime(ticks * 1000);
                    _this.data[i].DateTime =
                        temp.getFullYear() + "/" + (temp.getMonth() + 1) + "/" + (temp.getDate() + 1) + " " + temp.getHours() + ":" + (temp.getMinutes() < 10 ? "0" + temp.getMinutes() : temp.getMinutes());
                }
            }
        });
    };
    QueryComponent.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    ;
    QueryComponent.prototype.pageChanged = function (event) {
        this.currentPage = event.page;
        this.searchData();
    };
    ;
    Object.defineProperty(QueryComponent.prototype, "sdt", {
        get: function () {
            return this._sdt;
        },
        set: function (newdt) {
            this._sdt = newdt;
            this.issDatePickerShow = false;
            var dtdisplay = this.sdt.getFullYear() + "-" + (this.sdt.getUTCMonth() + 1) + "-" + (this.sdt.getUTCDate() + 1);
            if (this.startDate != dtdisplay) {
                this.startDate = dtdisplay;
                this.currentPage = 1;
                this.searchData();
            }
        },
        enumerable: true,
        configurable: true
    });
    QueryComponent.prototype.showsDatePicker = function (show) {
        this.issDatePickerShow = show;
    };
    QueryComponent.prototype.clearsDateTime = function () {
        this.issDatePickerShow = false;
        if (this.startDate != "") {
            this.startDate = "";
            this.searchData();
        }
    };
    Object.defineProperty(QueryComponent.prototype, "edt", {
        get: function () {
            return this._edt;
        },
        set: function (newdt) {
            this._edt = newdt;
            this.iseDatePickerShow = false;
            var dtdisplay = this.edt.getFullYear() + "-" + (this.edt.getUTCMonth() + 1) + "-" + (this.edt.getUTCDate() + 1);
            if (this.endDate != dtdisplay) {
                this.endDate = dtdisplay;
                this.currentPage = 1;
                this.searchData();
            }
        },
        enumerable: true,
        configurable: true
    });
    QueryComponent.prototype.showeDatePicker = function (show) {
        this.iseDatePickerShow = show;
    };
    QueryComponent.prototype.cleareDateTime = function () {
        this.iseDatePickerShow = false;
        if (this.endDate != "") {
            this.endDate = "";
            this.searchData();
        }
    };
    QueryComponent = __decorate([
        core_1.Component({
            selector: 'query-component',
            templateUrl: "app/admin/pages/query.component.html",
            providers: [record_service_1.RecordService]
        }), 
        __metadata('design:paramtypes', [record_service_1.RecordService, config_service_1.ConfigService])
    ], QueryComponent);
    return QueryComponent;
}());
exports.QueryComponent = QueryComponent;
//# sourceMappingURL=query.component.js.map