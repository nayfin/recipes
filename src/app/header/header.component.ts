import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  // TODO: make this an input
  title = 'Recipe App';
  // TODO: Import appRoutes after seperated into module, or create links service to provide to routes and header
  links: Link[] = [
    {title: 'Recipes', route: 'recipes'},
    {title: 'Shopping List', route: 'shopping-list'},
  ];
  constructor() { }

  ngOnInit() {
  }
}
// TODO find a way to connect this to routes
export class Link {
  constructor( public title: string,
               public route: string ) { }
}
