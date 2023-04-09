import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formdata = {name:"",email:"",password:""};
  submit=false;
  errorMessage="";
  loading=false;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.canAuthenticate();
  }

  onSubmit(){

      this.loading=true;

      //call register service
      this.auth
      .register(this.formdata.name,this.formdata.email,this.formdata.password)
      .subscribe({
          next:data=>{
              //store token from response data
              this.auth.storeToken(data.idToken);
              console.log('Registered idtoken is '+data.idToken);
              this.auth.canAuthenticate();

          },
          error:data=>{
              if (data.error.error.message=="INVALID_EMAIL") {

                  this.errorMessage = "Invalid Email!";

              } else if (data.error.error.message=="EMAIL_EXISTS") {

                  this.errorMessage = "Already Email Exists!";

              }else{

                  this.errorMessage = "Unknown error occured when creating this account!";
              }
          }
      }).add(()=>{
          this.loading =false;
          console.log('Register process completed!');
      })
  }

}

// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// // import { ToastrService } from 'ngx-toastr';
// declare var $:any;

// @Component({
//   selector: 'app-singup',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class SingupComponent implements OnInit {

//   constructor( private _route:Router, private _http:HttpClient) { }
//   singup:FormGroup|any;
//   signuser:any;
//   ngOnInit(): void {
//     this.singup = new FormGroup({
//       'fname': new FormControl(),
//       'lname':new FormControl(),
//       'email':new FormControl(),
//       'phone':new FormControl(),
//       'password': new FormControl()
//     })
//   }

//   singupdata(singup:FormGroup){
//     //console.log(this.singup.value);
//     this.signuser = this.singup.value.fname
//     this._http.post<any>("http://localhost:3000/signup", this.singup.value)
//     .subscribe(res=>{
//       alert('data added successfully');
//       this.singup.reset();
//       this._route.navigate(['login']);
//     }, err=>{
//       alert('Somthing went wrong');
//     })

//   }

//   sbtn(){

//     this._route.navigate(['login']);
//     //$('.form-box1').css('z-index', '99');
//     $('.form-box').css('display','block');
//     $('.form-box1').css('display','none');
//   }
// }
