import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routing } from './login.routing';
import {LoginComponent } from './login.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
    imports: [
        BrowserModule,
        routing,
        FormsModule
    ],
    declarations: [
        LoginComponent
    ]
    // ,
    // bootstrap: [LoginComponent]
})
export class LoginModule { }
