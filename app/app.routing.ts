import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo:"login", pathMatch: 'full' }//,
  // { path: '**', redirectTo:"admin", pathMatch: 'full' }
  //{ path: "admin", loadChildren: 'app/admin/admin.module#AdminModule' }//,
  // { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
  // { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
export const appRoutingProviders: any[] = [

];