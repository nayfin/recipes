import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  token: string;

  constructor(private router: Router) { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => console.error(error));
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(
        (response) => {
          firebase.auth().currentUser.getToken().then(
            (token: string) => {
              this.token = token;
              this.router.navigate(['home']);
            }
          );
        }
      )
      .catch(error => console.error(error));
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }
  getToken() {
    firebase.auth().currentUser.getToken().then(
      (token: string) => this.token = token
    );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}