import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from "./admin.component";
import { QueryComponent } from "./pages/query.component";
import { QrcodeComponent } from "./pages/qrcode.component";
import { AuthService } from '../services/auth.service';


export const routes: Routes = [
    {
        path: 'admin', component: AdminComponent,
        canActivateChild: [AuthService]
        , children: [
            { path: "", component: QueryComponent },
            { path: "query", component: QueryComponent },
            { path: "qrcode", component: QrcodeComponent }
        ]
    }

];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
