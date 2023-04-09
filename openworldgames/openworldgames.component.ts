import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { openworldgame } from '../games-categories/openworldgame';

type openworldInfo={gamename:string, genere:string, description:string, requirements:string,img:string};

@Component({
  selector: 'app-openworldgames',
  templateUrl: './openworldgames.component.html',
  styleUrls: ['./openworldgames.component.css']
})
export class OpenworldgamesComponent  {

  // constructor() { }

  // ngOnInit() {
  // }

  title='categories';
  public openworld:any;
  constructor(http:HttpClient){

    // const postss:Observable<Post>= http.get<Post>('/assets/posts.json');
    http.get("http://localhost:3000/products2").subscribe(openworldgame=>{
      this.openworld=openworldgame;
      console.log(JSON.stringify(this.openworld));
    })
  }

}
