import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {
  url = "https://dummyjson.com/products";
  urll = "http://localhost:3000/users";
  constructor(private http: HttpClient) { }
  users() {
    return this.http.get(this.url)
  }

  saveUser(data: any) {
    return this.http.post(this.urll, data)
  }
}
