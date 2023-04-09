import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formdata = {email:"",password:""};
  submit=false;
  loading=false;
  errorMessage="";
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.canAuthenticate();
  }

  onSubmit(){
    this.loading=true;
    //call login service
    this.auth.login(this.formdata.email,this.formdata.password)
    .subscribe({
        next:data=>{
            //store token
            this.auth.storeToken(data.idToken);
            console.log('logged user token is '+data.idToken);
            this.auth.canAuthenticate();
        },
        error:data=>{
            if (data.error.error.message=="INVALID_PASSWORD" || data.error.error.message=="INVALID_EMAIL") {
                this.errorMessage = "Invalid Credentials!";
            } else{
                this.errorMessage = "Unknown error when logging into this account!";
            }
        }
    }).add(()=>{
        this.loading =false;
        console.log('login process completed!');

    })
  }

}


// Db.json


// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// declare var $:any;
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   login:FormGroup|any;
//   constructor(private _http:HttpClient, private _route:Router) { }

//   ngOnInit(): void {
//     this.login = new FormGroup({
//       'fname': new FormControl(),
//       'password': new FormControl()
//     })
//   }
//   logindata(login:FormGroup){
//    // console.log(this.login.value);
//     this._http.get<any>("http://localhost:3000/signup")
//     .subscribe(res=>{
//       const user = res.find((a:any)=>{
//         return a.fname === this.login.value.fname && a.password === this.login.value.password
//       });

//       if(user){
//         alert('you are successfully login');
//         this.login.reset();
//         $('.form-box').css('display','none');
//         this._route.navigate(['dashboard']);
//       }else{
//         alert('User Not Found');
//         this._route.navigate(['login']);
//       }

//     }, err=>{
//       alert('Something was wrong');
//     })


//   }

//   sbtn1(){
//     $('.form-box').css('display','none');
//     $('.form-box1').css('display','block');
//   }

// }

