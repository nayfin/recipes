import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

// TODO: You've prepared the header by seperating links into userLinks and authLinks and created a variable loggedIn to track auth status; 



export class HeaderComponent implements OnInit {
  // TODO: make this an input
  title = 'Recipe App';

  // TODO: Import appRoutes after seperated into module, or create links service to provide to routes and header
  userLinks: Link[] = [
    {title: 'RECIPES', route: 'recipes'},
    {title: 'SHOPPING LIST', route: 'shopping-list'},
  ];

  authLinks: Link[] = [
    {title: 'SIGNUP', route: 'signup'},
    {title: 'SIGNIN', route: 'signin'},
  ]
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
  }
}
// TODO: find a way to connect this to routes
export class Link {
  constructor( public title: string,
               public route: string ) { }
}
