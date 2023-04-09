import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Products } from './Products';

@Injectable({
  providedIn: 'root'
})
export class RestService {

constructor(private http : HttpClient) { }


url: string = "http://localhost:3000/products";

getProducts()
{
  return this.http.get<[]>(this.url)
}
}
