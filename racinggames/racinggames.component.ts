import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { racinggame } from '../games-categories/racinggame';

@Component({
  selector: 'app-racinggames',
  templateUrl: './racinggames.component.html',
  styleUrls: ['./racinggames.component.css']
})
export class RacinggamesComponent  {

  // constructor() { }

  // ngOnInit() {
  // }

  title='categories';
  public racing:any;
  constructor(http:HttpClient){

    // const postss:Observable<Post>= http.get<Post>('/assets/posts.json');
    http.get("http://localhost:3000/products5").subscribe(racinggame=>{
      this.racing=racinggame;
      console.log(JSON.stringify(this.racing));
    })
  }

}
