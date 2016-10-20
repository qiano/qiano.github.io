import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import{ConfigService} from './services/config.service';
import{AuthService} from './services/auth.service';

@NgModule({
    imports: [
        BrowserModule,
        LoginModule,
        AdminModule,
        routing
    ],
    providers: [
        appRoutingProviders,
        ConfigService,
        AuthService
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
