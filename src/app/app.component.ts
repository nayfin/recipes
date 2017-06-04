import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Recipe App';

  currentPage: string = "./shopping-list"

  onLinkclicked(data){
    console.log("emitted data:", data);
    this.currentPage = data;

  }
  ngOnInit(){
    console.log(this.currentPage);
  }
}
