import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  selectedNav="Recipe";

  onNavSelect(selectedNavText){
    this.selectedNav=selectedNavText;
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyC9JShB4i22nu8cPpMuMX_6J0wAG36cE90",
      authDomain: "recipe-project-e1e00.firebaseapp.com"
    });
  }
  
}
