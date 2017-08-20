import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService) {
    this.registrationForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
  }
  onSignin() {
    const email = this.registrationForm.get('email').value,
          password = this.registrationForm.get('password').value;
    this.authService.signinUser(email, password);
  }
}
