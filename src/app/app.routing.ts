import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { AdminComponent } from './admin/admin/admin.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    {
      path: 'compose',
      component: AdminComponent,
      children: [
       {
         path: 'products',
         //loadChildren: './modules/product/product.module#ProductModule'
         loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
       },
       {
         path: 'search',
         loadChildren: './modules/manager/manager.module#ManagerModule'
       },{
        path: 'product-dash',
        loadChildren: () => import('./modules/product-dash/product-dash.module')
        .then(m => m.ProductDashModule)
      },
      ]
    },
    //DEV
    { path: 'products',          component: ProductoListComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
<<<<<<< HEAD
      useHash: false
=======
      useHash: false,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload',
>>>>>>> bc3d50a (This is a new commit for what I originally planned to be amended)
    })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
