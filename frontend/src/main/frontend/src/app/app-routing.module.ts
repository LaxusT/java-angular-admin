import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectivePreloadingStrategy } from "./selective-preloading-strategy";

import { PageNotFoundComponent } from './pages/error-page/page-not-found.component';

/**
 * app路由
 */
const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'app',
    loadChildren: 'app/pages/main/main.module#MainModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: SelectivePreloadingStrategy, useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


