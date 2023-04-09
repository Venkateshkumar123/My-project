import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bussimulator21',
  templateUrl: './bussimulator21.component.html',
  styleUrls: ['./bussimulator21.component.css']
})
export class Bussimulator21Component implements OnInit {

  aimages:any=["/assets/images/bs21ri1.jpg", "/assets/images/bs21ri2.jpg", "/assets/images/bs21ri3.jpg", "/assets/images/bs21ri4.jpg", "/assets/images/bs21ri5.jpg", "/assets/images/bs21ri6.jpg"];

  castimages:any=["/assets/images/ellen.jpg","/assets/images/damon.jpg","/assets/images/mark.jpg","/assets/images/steve.jpg","/assets/images/karin.jpg"];

  constructor() { }

  ngOnInit() {
  }

}
