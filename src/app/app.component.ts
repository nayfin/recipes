import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { HeaderComponent } from './core/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Recipe App';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: 'AIzaSyCyIYB831VTkLB6tzn84Z70ggc_FPmlA8E',
      authDomain: 'bh-fresh-recipes.firebaseapp.com'
    });
  }
}