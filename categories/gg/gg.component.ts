import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gg',
  templateUrl: './gg.component.html',
  styleUrls: ['./gg.component.css']
})
export class GgComponent implements OnInit {

  aimages:any=["/assets/images/ggri1.jpg", "/assets/images/ggri2.jpg", "/assets/images/ggri3.jpg", "/assets/images/ggri4.jpg", "/assets/images/ggri5.jpg", "/assets/images/ggri6.jpg"];

  castimages:any=["/assets/images/chris.jpg","/assets/images/zoe.jpg","/assets/images/dave.jpg","/assets/images/vin.jpg","/assets/images/bradly.jpg"];

  constructor() { }

  ngOnInit() {
  }

}
