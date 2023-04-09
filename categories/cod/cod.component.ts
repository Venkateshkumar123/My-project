import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cod',
  templateUrl: './cod.component.html',
  styleUrls: ['./cod.component.css']
})
export class CodComponent implements OnInit {

  aimages:any=["/assets/images/codri1.jpg", "/assets/images/codri2.jpg", "/assets/images/codri3.jpg", "/assets/images/codri1.jpg", "/assets/images/codri5.jpg", "/assets/images/codri6.jpg"];

  castimages:any=["/assets/images/david.jpg","/assets/images/damon.jpg","/assets/images/jeff.jpg","/assets/images/creed.jpg","/assets/images/casey.jpg"];

  constructor() { }

  ngOnInit() {
  }

}
