import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cyberpunk',
  templateUrl: './cyberpunk.component.html',
  styleUrls: ['./cyberpunk.component.css']
})
export class CyberpunkComponent implements OnInit {

  aimages:any=["/assets/images/cpri1.jpg", "/assets/images/cpri2.jpg", "/assets/images/cpri3.jpg", "/assets/images/cpri4.jpeg", "/assets/images/cpri5.jpg", "/assets/images/cpri6.jpg"];

  castimages:any=["/assets/images/zack.jpg","/assets/images/kenichiro.jpg","/assets/images/emi.jpg","/assets/images/aoi.jpg","/assets/images/Stephanie.jpg"];
  constructor() { }

  ngOnInit() {
  }

}
