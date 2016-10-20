import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './admin.routing';
import { AdminComponent } from './admin.component';
import { QueryComponent } from './pages/query.component';
import { QrcodeComponent } from './pages/qrcode.component';
import { PaginationModule, DatepickerModule, DropdownModule, ModalModule } from 'ng2-bootstrap';

import { HttpModule } from '@angular/http';
@NgModule({
    imports: [
        BrowserModule,
        PaginationModule,
        DatepickerModule,
        DropdownModule,
        ModalModule,
        HttpModule,
        routing
    ],
    declarations: [
        AdminComponent, QueryComponent, QrcodeComponent
    ]
})
export class AdminModule { }
