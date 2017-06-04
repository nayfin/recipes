import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

//@Input
export class HeaderComponent implements OnInit {
  @Output() linkClicked = new EventEmitter<string>();
  //TODO: make this an input
  title: string = "Recipe App";
  // TODO: Import appRoutes after seperated into module, or create links service to provide to routes and header
  links: {}[] = [
    {title: "Recipes", route: "recipes"},
    {title: "Shopping List", route: "shopping-list"},
  ];
  constructor() { }

  ngOnInit() {
  }

  // onLinkClick(suffix){
  //   this.linkClicked.emit(suffix)
  //   console.log(suffix)
  // }

}
