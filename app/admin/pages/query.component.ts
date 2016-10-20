import { Component, OnInit } from '@angular/core';
import { RecordService, Record } from '../../services/record.service';
import { ConfigService } from '../../services/config.service';

import * as moment from 'moment';

@Component({
    selector: 'query-component',
    templateUrl: "app/admin/pages/query.component.html",
    providers: [RecordService]
})
export class QueryComponent implements OnInit {
    private host = this.config.HostUrl
    constructor(private recordService: RecordService, private config: ConfigService) { }
    public ngOnInit(): void {
        this.searchData();
    }
    private data: Array<Record>;
    public columns: Array<any> = [
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
    clickCol(col: any) {
        if (col.sort) {
            if (col.sort == "asc") {
                col.sort = "desc"
            } else {
                if (col.sort == "desc") {
                    col.sort = ""
                }
            }
        } else {
            col.sort = "asc";
        }
        this.columns.forEach(c => {
            if (c.name != col.name) {
                c.sort = "";
            }
        });

        this.searchData();

    }
    filterChanged(col: any, event: any) {
        this.currentPage = 1;
        this.searchData();
    }

    searchData(): void {
        let filters: Array<any> = new Array();
        let sort: any = {};
        this.columns.forEach(c => {
            if (c.filterKey) {
                let temp: any = {};
                temp["name"] = c.name;
                temp["filterKey"] = c.filterKey;
                filters.push(temp)
            }
            if (c.sort) {
                sort["name"] = c.name;
                sort["sort"] = c.sort;
            }
        });

        if (this.startDate != "") {
            filters.push({ name: "startdate", filterKey: this.startDate })
        }
        if (this.endDate != "") {
            filters.push({ name: "enddate", filterKey: this.endDate })
        }
        this.recordService.getRecordPage(this.currentPage, this.itemsPerPage, sort, filters).then(ret => {
            this.totalItems = ret.total;
            this.data = <Array<Record>>(ret.data)
            if (this.totalItems > 0) {
                for (var i = 0; i < this.data.length; i++) {
                    let temp = new Date();
                    let ticks = Number.parseInt(this.data[i].DateTime)
                    temp.setTime(ticks * 1000)
                    this.data[i].DateTime =
                        temp.getFullYear() + "/" + (temp.getMonth() + 1) + "/" + (temp.getDate() + 1) + " " + temp.getHours() + ":" + (temp.getMinutes() < 10 ? "0" + temp.getMinutes() : temp.getMinutes());
                }
            }
        });
    }



    public itemsPerPage: number = 15; //页大小
    public currentPage: number = 1; //当前页
    public totalItems: number = 0; //总数
    public maxSize: number = 8;
    public numPages: number = 4;
    public length: number = 0;
    public setPage(pageNo: number): void {
        this.currentPage = pageNo;
    };
    public pageChanged(event: any): void {
        this.currentPage = event.page
        this.searchData();
    };


    private _sdt: Date;
    get sdt(): Date {
        return this._sdt;
    }
    set sdt(newdt: Date) {
        this._sdt = newdt;
        this.issDatePickerShow = false;
        let dtdisplay = this.sdt.getFullYear() + "-" + (this.sdt.getUTCMonth() + 1) + "-" + (this.sdt.getUTCDate() + 1)
        if (this.startDate != dtdisplay) {
            this.startDate = dtdisplay;
            this.currentPage = 1;
            this.searchData();
        }
    }
    private issDatePickerShow = false;
    showsDatePicker(show: boolean) {
        this.issDatePickerShow = show
    }
    clearsDateTime() {
        this.issDatePickerShow = false;
        if (this.startDate != "") {
            this.startDate = "";
            this.searchData();
        }
    }
    private startDate = "";

    //enddate
    private _edt: Date;
    get edt(): Date {
        return this._edt;
    }
    set edt(newdt: Date) {
        this._edt = newdt;
        this.iseDatePickerShow = false;
        let dtdisplay = this.edt.getFullYear() + "-" + (this.edt.getUTCMonth() + 1) + "-" + (this.edt.getUTCDate() + 1)
        if (this.endDate != dtdisplay) {
            this.endDate = dtdisplay;
            this.currentPage = 1;
            this.searchData();
        }
    }
    private iseDatePickerShow = false;
    showeDatePicker(show: boolean) {
        this.iseDatePickerShow = show
    }
    cleareDateTime() {
        this.iseDatePickerShow = false;
        if (this.endDate != "") {
            this.endDate = "";
            this.searchData();
        }
    }
    private endDate = "";
    //--enddate




    private showPhotoUrl: string

}