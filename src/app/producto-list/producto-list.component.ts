import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {
  //private LOGO = require("./assets/img/brand/favicon0.png");
  imgSrc:string = "/assets/img/brand/favicon0.png";
  constructor() { }

  ngOnInit() {
    
  }

}
