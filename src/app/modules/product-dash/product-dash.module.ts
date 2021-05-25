import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDashComponent } from './product-dash.component';
import { ProductDashRoutingModule } from './product-dash-routing.module';
import { DataTablesModule } from 'angular-datatables';
@NgModule({
  declarations: [ProductDashComponent],
  imports: [
    DataTablesModule,
    CommonModule,
    ProductDashRoutingModule
  ]
})
export class ProductDashModule { }
