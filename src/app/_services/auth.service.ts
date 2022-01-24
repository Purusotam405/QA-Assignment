import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

import * as jwt_decode from 'jwt-decode';

import { UserService } from "./user.service";
import { User } from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private REST_API_SERVER: string ="http://localhost:3000";
  public url: string = "";

  constructor(private http:HttpClient, private user:UserService, private router:Router) {
  }

  public login(email: string, password: string): Observable<any>{
    return this.http.post<{accessToken: string}>(this.REST_API_SERVER + '/login', {email, password})
      .pipe(tap(res => {
        localStorage.setItem('accesstoken', res.accessToken);
        let token = this.getDecodedAccessToken(res.accessToken);
        localStorage.setItem('userId', token.sub)
        this.role()
      }))
  }

  public register(login: User): Observable<any> {
    return this.http.post<{accessToken: string}>(this.REST_API_SERVER + '/register', login )
    .pipe(tap(res => {
      localStorage.setItem('accesstoken', res.accessToken);
      let token = this.getDecodedAccessToken(res.accessToken);
        localStorage.setItem('userId', token.sub)
        this.role()
    }))
  }

  public isAdmin():boolean{
    if(localStorage.getItem('role') == "Admin"){
      return true
    }
  }

  //clears localstorage 
  public clearLocalS(){
    if (localStorage.getItem != null){
      localStorage.removeItem('accesstoken');
      localStorage.removeItem('userId');
      localStorage.removeItem('role');
    }
  }

  public logout() {
    localStorage.removeItem('accesstoken');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
  }

  public isloggedIn(){
    return localStorage.getItem('accesstoken') != null;
  }


  role(){
    this.user.getUserById().subscribe(data => {
      console.log(data)
      localStorage.setItem('role',data.role);
    })
  }

  //decode the jwt token
  public getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }
}
