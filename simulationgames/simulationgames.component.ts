import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { simulationgame } from '../games-categories/simulationgame';



type horrorInfo={gamename:string, genere:string, description:string, requirements:string,img:string};

@Component({
  selector: 'app-simulationgames',
  templateUrl: './simulationgames.component.html',
  styleUrls: ['./simulationgames.component.css']
})
export class SimulationgamesComponent  {

  // constructor() { }

  // ngOnInit() {
  // }

  title='categories';
  public simulation:any;
  constructor(http:HttpClient){

    // const postss:Observable<Post>= http.get<Post>('/assets/posts.json');
    http.get("http://localhost:3000/products4").subscribe(simulationgame=>{
      this.simulation=simulationgame;
      console.log(JSON.stringify(this.simulation));
    })
  }

}
