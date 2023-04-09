import { Component, OnInit } from '@angular/core';
// import { RestService } from '../rest.service';
// import{Products} from '../Products';
import{Post} from '../games-categories/Post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


type PostInfo={gamename:string, genere:string, description:string, requirements:string,img:string};

@Component({
  selector: 'app-actiongames',
  templateUrl: './actiongames.component.html',
  styleUrls: ['./actiongames.component.css']
})
export class ActiongamesComponent {

  // constructor(private rs :RestService) { }

  //  columns= ["Product id","Game Name","Description","Price"];

  //  index= ["id","gamename","description","price"];

  // products : [] = [];

  // ngOnInit():void  {
  //   this.rs.getProducts().subscribe(


  //     (response)=>{
  //       this.products =response;
  //     },

  //     (error)=>{
  //       console.log("Error Occured :"+error);
  //     }
  //   )



  // }


  title='categories';
  public posts:any;
  constructor(http:HttpClient){

    // const postss:Observable<Post>= http.get<Post>('/assets/posts.json');
    http.get("http://localhost:3000/products").subscribe(post=>{
      this.posts=post;
      console.log(JSON.stringify(this.posts));
    })
  }

}
