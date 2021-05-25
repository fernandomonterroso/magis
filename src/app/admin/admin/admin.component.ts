import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  model = {
    left: true,
    middle: false,
    right: false
};

focus;
focus1;
  constructor() { }

  ngOnInit() {
  }

}
