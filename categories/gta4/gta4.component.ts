import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gta4',
  templateUrl: './gta4.component.html',
  styleUrls: ['./gta4.component.css']
})
export class Gta4Component implements OnInit {

  aimages:any=["/assets/images/gta4ri1.jpg", "/assets/images/gta4ri2.jpg", "/assets/images/gta4ri3.jpg", "/assets/images/gta4ri4.jpg", "/assets/images/gta4ri5.jpg", "/assets/images/gta4ri6.jpg"];

  castimages:any=["/assets/images/michaelh.jpg","/assets/images/zason.jpg","/assets/images/timothy.jpg","/assets/images/moti.jpg","/assets/images/doris.jpg"];

  constructor() { }

  ngOnInit() {
  }

}
