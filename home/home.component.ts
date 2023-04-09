import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images:any = ["assets/images/fortnite.jpg","assets/images/gtav.jpg","assets/images/game2.jpg","assets/images/gta4.jpg","assets/images/cp.jpg","assets/images/coldwar.png","assets/images/bs.jpg","assets/images/cs.png","assets/images/fs.png","assets/images/ss.png","assets/images/rws.png","assets/images/ts.png","assets/images/gowr.jpg","assets/images/pti.jpg","assets/images/ptr.png","assets/images/bts.jpg","assets/images/game2.jpg","assets/images/skrx.jpg","assets/images/nfsp.png","assets/images/mgp.jpg",

  "assets/images/c2.png","assets/images/dr.jpg","assets/images/fh5.png","assets/images/fh4.jpg",];
  constructor() { }

  ngOnInit(): void {
  }

}
