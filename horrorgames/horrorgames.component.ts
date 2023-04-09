import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { horrorgame } from '../games-categories/horrorgame';

type horrorInfo={gamename:string, genere:string, description:string, requirements:string,img:string};

@Component({
  selector: 'app-horrorgames',
  templateUrl: './horrorgames.component.html',
  styleUrls: ['./horrorgames.component.css']
})
export class HorrorgamesComponent  {

  // constructor() { }

  // ngOnInit() {
  // }

  title='categories';
  public horror:any;
  constructor(http:HttpClient){

    // const postss:Observable<Post>= http.get<Post>('/assets/posts.json');
    http.get("http://localhost:3000/products3").subscribe(horrorgame=>{
      this.horror=horrorgame;
      console.log(JSON.stringify(this.horror));
    })
  }

}
