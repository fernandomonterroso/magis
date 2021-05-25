import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    NgbModule.forRoot(),
    NgxSpinnerModule
  ],
  
})
export class ProductModule { }
