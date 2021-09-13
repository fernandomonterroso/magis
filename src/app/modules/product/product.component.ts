import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';
import {Router} from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner';

export interface IAlert {
  type: string;
  strong?: string;
  message: string;
  icon?: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductoService]
  
})
export class ProductComponent implements OnInit {
  public alerts: Array<IAlert> = [];
  private backup: Array<IAlert>;

  imgSrc:string = "/assets/img/brand/favicon0.png";
  public url;
  public identity;
  public token;
  public status;
  public modelProducto: Producto;
  public descuentoGlobal:string;
  public myCar:any[]= [];
  public itemsPerPage;
  //
  contact: Array<Object>;
  elemento: Array<Object>;

  //
  public queryString;
  public urlParams;
  public page1: Number;
  public limit: Number;
  public totalDatos;
  public mostarCantidad;
  public respuesta;

  constructor(private spinner: NgxSpinnerService,
    private _router: Router,
    private _productoService: ProductoService
  ) { 
    this.modelProducto = new Producto("","","",0,0,0,"","","","","");
    this.queryString = window.location.search;
    this.urlParams = new URLSearchParams(this.queryString);
    this.page1 = this.urlParams.get('page');
    this.limit = this.urlParams.get('limit') ;
    //ALERTS
  }

  ngOnInit() {
    if(!Number(this.urlParams.get('limit'))){
      this.limit = 12;
    };
    //this.getProductos(this.page1,this.limit);
    this.animaciones();
  }


  
  close(alert: IAlert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  postElement(paramElement) {
    this.myCar.push(paramElement);
    console.log(this.myCar);
  }
  currentPage = 1;
  //itemsPerPage = 12;
  pageSize: number =0;
  changePage(pageNum,limitPage){
    console.log("page::",pageNum);
    console.log("limit::",limitPage);
    this.limit;
  

    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 
    '?page='+pageNum+'&limit='+this.limit;
    window.history.pushState({path:newurl},'',newurl);
    this.getProductos(pageNum,this.limit);
  }

  public changePagesize(pageSize:number,num: number): void {
    console.log("que pedo");
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + 
    '?page='+pageSize+'&limit='+num;
    window.history.pushState({path:newurl},'',newurl);
    this.getProductos(pageSize,num);
  }

  getProductos(skip,limit){
    this.spinner.show();
    
    this._productoService.getProductos1( 
      {
        "params": {
            "page": skip,
            "limit": limit,
            "token": "1"
        }
    }

    ).subscribe(
     
      response=>{
        this.respuesta = response;
        if(response.productos){
          
          this.modelProducto =   response.productos;
          this.descuentoGlobal =   response.general[0].porcentaje;
          this.totalDatos = response.parametros.cantidad;
          this.status='Ok'
          this.spinner.hide();
        }
      },
      error=>{
        
        var errorMessage = <any>error;
        errorMessage = JSON.stringify(errorMessage);
        console.log(errorMessage);
        if(errorMessage !=null){
          this.status = 'error'
        }
        this.spinner.hide();
        this.alerts.push({
          type: 'danger',
          strong: 'Ocurrio un error!',
          message: errorMessage,
          icon: 'ni ni-support-16'
          });
      }
    )
    //this.getTareas()
  }


  //#region 
  animaciones(){
    const navBar = document.querySelector(".navigation");
    const gotoTop = document.querySelector(".goto-top");
    window.addEventListener("scroll", e => {
      const scrollHeight = window.pageYOffset;
     
    
      if (scrollHeight > 300) {
        gotoTop.classList.add("show-top");
      } else {
        gotoTop.classList.remove("show-top");
      }
    });
  }
  //#endregion

}
