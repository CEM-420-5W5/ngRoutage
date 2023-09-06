import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isConnected = false;

  constructor() { }

  changeConnectedState() {
    this.isConnected = ! this.isConnected;
  }

}
