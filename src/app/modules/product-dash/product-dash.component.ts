import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DataTablesModule } from 'angular-datatables';
import 'datatables.net';
import 'datatables.net-bs4';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-product-dash',
  templateUrl: './product-dash.component.html',
  styleUrls: ['./product-dash.component.css'],
  providers: [ProductoService]
})

export class ProductDashComponent implements OnInit {
  public url;
  public identity;
  public token;
  public status;
  public modelProducto: Producto;
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  posts;
  
  constructor(private http: HttpClient,private _productoService: ProductoService) { 
    this.modelProducto = new Producto("","","",0,0,0,"","","","","");
  }
  
  ngOnInit(): void {
    this.espera();
    this.getProductos();
  }

  espera(){
    setTimeout(function(){  
    const table: any = $('#dataTable');
      this.datatable = table.DataTable();
    }, 2000);
    
    this.http.get('http://jsonplaceholder.typicode.com/posts')
    .subscribe(posts => {
      this.posts = posts;
    });  
  };

  getProductos(){
    this._productoService.getProductos1(this.token).subscribe(
      response=>{
        //console.log(response);
        if(response.productos){
          this.modelProducto =   response.productos;
          console.log(this.modelProducto);
          this.status='Ok'
        }
      },
      error=>{
        console.log("eror"+error);
        var errorMessage = <any>error;
        console.log("ee",errorMessage);
        if(errorMessage !=null){
          this.status = 'error'
        }
      }
    )
    //this.getTareas()
  }

}
