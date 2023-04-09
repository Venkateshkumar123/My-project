import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gtav',
  templateUrl: './gtav.component.html',
  styleUrls: ['./gtav.component.css']
})
export class GtavComponent implements OnInit {

  aimages:any=["/assets/images/gtavri1.jpg", "/assets/images/gtavri2.jpg", "/assets/images/gtavri3.jpg", "/assets/images/gtavri4.jpg", "/assets/images/gtavri5.jpg", "/assets/images/gtavri6.jpg"];

  castimages:any=["/assets/images/franklin.jpg","/assets/images/michle.jpg","/assets/images/trevor.jpg","/assets/images/lamar.jpg","/assets/images/amanda.jpg"];
  constructor() { }

  ngOnInit() {
  }

}
