import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aimages:any=["/assets/images/cb.jpg", "/assets/images/cbri1.jpg", "/assets/images/cbri6.jpg", "/assets/images/cbri3.jpg", "/assets/images/cbri4.jpg", "/assets/images/cbri5.jpg",

  "/assets/images/tchia1.jpeg", "/assets/images/tchia2.jpg", "/assets/images/tchia3.jpg", "/assets/images/tchia4.jpg", "/assets/images/tchia5.jpg", "/assets/images/tchia6.jpg",

  "/assets/images/louri1.jpg", "/assets/images/louri2.jpg", "/assets/images/louri3.jpg", "/assets/images/louri4.jpg", "/assets/images/louri5.jpg", "/assets/images/louri6.jpg",

  "/assets/images/di2ri1.jpg",  "/assets/images/di2ri2.jpg",  "/assets/images/di2ri3.jpg",  "/assets/images/di2ri4.jpg", "/assets/images/di2ri5.jpg", "/assets/images/di2ri6.jpg",

  "/assets/images/srpri1.jpg",  "/assets/images/srpri2.jpg",  "/assets/images/srpri3.jpg",  "/assets/images/srpri4.jpg",  "/assets/images/srpri5.jpg",  "/assets/images/srpri6.jpg",

  "/assets/images/fnri1.jpg",   "/assets/images/fnri2.jpg",   "/assets/images/fnri3.jpg",    "/assets/images/fnri4.jpg",   "/assets/images/fnri5.jpg",   "/assets/images/fnri6.jpg",
];

  constructor() { }

  ngOnInit() {
  }

}
