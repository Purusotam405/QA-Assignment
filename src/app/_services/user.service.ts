import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Bet } from "../model/bet";
import { Booking } from "../model/booking";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private id;

  private REST_API_SERVER = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  public getUser(): Observable<any> {
    return this.http.get(this.REST_API_SERVER + '/users');
  }
  public getUserById(): Observable<any> {
    this.id = localStorage.getItem('userId');
    return this.http.get(this.REST_API_SERVER + '/users/' + this.id);
  }

  public placeABet(bet: Bet): Observable<any>{
    return this.http.post(this.REST_API_SERVER + '/bets', bet);
  }

  public bookTicket(booking : Booking): Observable<any>{
    return this.http.post(this.REST_API_SERVER + '/bookings', booking);
  }
}
