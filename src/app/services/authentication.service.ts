import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isConnected:boolean = false;

  constructor() {
    if(localStorage.getItem("isConnected") == "true")
      this.isConnected = true;
  }

  changeConnectedState() {
    this.isConnected = ! this.isConnected;
    localStorage.setItem("isConnected", this.isConnected.toString());
  }

}
