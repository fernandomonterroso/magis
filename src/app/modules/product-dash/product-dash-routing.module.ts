import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDashComponent } from './product-dash.component';
const routes: Routes = [
  {
    path: '',
    component: ProductDashComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDashRoutingModule { }
