import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import{ConfigService}from './config.service';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class RecordService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private url = this.config.HostUrl + '/record/query';  // URL to web api

    constructor(private http: Http,private config:ConfigService) { }

    getRecordPage(pageIndex: number, pageSize: number, sort?: any, filters?: any): Promise<any> {
        console.log("pageIndex:" + pageIndex)
        console.log("pageSize:" + pageSize)
        let params = "?pageIndex=" + pageIndex + "&pageSize=" + pageSize;
        if (filters.length) {
            for (var i = 0; i < filters.length; i++) {
                params = params + "&" + filters[i].name + "=" + filters[i].filterKey
                console.log("filters" + i + ":" + filters[i].name + " " + filters[i].filterKey)
            }
        }
        if (sort.name) {
            let sortStr = sort.sort == "asc" ? sort.name : "-" + sort.name
            params = params + "&sort=" + sortStr;
            console.log("sort:" + sortStr)
        }
        return this.http.get(this.url + params).toPromise()
            .then(response => response.json());
    }

}
export class Record {
    Id:number;
    PatientName: string;
    PatientNo: string;
    Project: string;
    Vendor: string;
    LotNo: string;
    Result: string;
    Location: string;
    Operator: string;
    DateTime: string;
    PhotoPath:string;
    AreaPath:string;
    
} 