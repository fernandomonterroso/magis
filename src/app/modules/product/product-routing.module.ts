import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from '../../app.component';
const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  }
];
@NgModule({
  imports: [DataTablesModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }