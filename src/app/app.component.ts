import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngRoutage';

  constructor(public router: Router, public authentication: AuthenticationService){}

  changeConnectedState(){
    console.log("Test");
    this.authentication.changeConnectedState();
    // ON ÉVITE DE FAIRE CA SAUF POUR TESTER!
    location.reload();
  }


  isConnected(){
    return this.authentication.isConnected;
  }
}
