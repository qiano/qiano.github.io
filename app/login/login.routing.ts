import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from "./login.component";

export const routes: Routes = [
  { path: 'login',  component:LoginComponent},
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
